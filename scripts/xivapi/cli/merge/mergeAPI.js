const fs = require("fs");
const logUpdate = require('log-update');

const constants = require("../../constants");

module.exports = function mergeAPI(content, rl, done) {
    const diffTasks = [];
    const newTasks = [];
    let mergeAll = false;

    dive(content.build(), "");

    // mergeDiffTasks > mergeNewTasks > done
    const [totalDiffs, totalNew] = [diffTasks.length, newTasks.length];
    mergeDiffTasks();

    //------------------------------------------------------------------ Look for things to merge
    function dive(cache, path) {
        // Recurse all groups within content type
        if(cache.keys.length) {
            cache.keys.forEach((key) => dive(cache[key], path ? `${path}/${key}` : key));
        }

        // Initialize merge of cached & app tasks
        if(cache.tasks.length) {
            analyzeTasks(cache, path, "en");
            analyzeTasks(cache, path, "fr");
        }
    }

    function analyzeTasks(cache, path, lang) {
        let appPath = `${constants.RESOURCES}/${lang}/${content.config.APP_PATH}/${path}.json`;
        if(content.getAppPath) appPath = content.getAppPath(appPath);

        // Allow content to exclude some paths
        if(content.mergePathExcluded && content.mergePathExcluded(appPath)) return;

        const appGroup = fs.existsSync(appPath) ? JSON.parse(fs.readFileSync(appPath, 'utf8')) : null;

        cache.tasks.forEach((cacheTask) => {
            let newTask = true;

            if(appGroup) {
                // vvv Can be used to reapply IDs
                // const appTask = appGroup.tasks.find((appTask) => cacheTask[`Name_${lang}`] === appTask.name);
                const appTask = appGroup.tasks.find((appTask) => cacheTask.ID === appTask.id);

                if(appTask) {
                    newTask = false;
                    content.MERGE_KEYS.forEach((appKey) => {
                        const cacheKey = content.getCacheKey(appKey, lang);

                        if(appTask[appKey] !== trim(cacheTask[cacheKey])) {
                            diffTasks.push({
                                appPath,
                                appKey,
                                appTask,
                                cacheKey,
                                cacheTask
                            });
                        }
                    });
                }
            }

            if(newTask) newTasks.push({ appPath, lang, cacheTask });
        });
    }

    //------------------------------------------------------------------ Merge diff'd properties
    function mergeDiffTasks() {
        logUpdate.clear();
        console.clear();

        // Continue workflow
        if(!diffTasks.length) {
            mergeNewTasks();
            return;
        }

        // Merge diff'd tasks
        const { appPath, appKey, appTask, cacheKey, cacheTask } = diffTasks.shift();

        rl.write(`Diff detected ${totalDiffs - diffTasks.length}/${totalDiffs}: ${appPath}\n`);
        rl.write(`Key: ${appKey}\n\n`);
        rl.write("App Task:\n");
        console.log(appTask);

        rl.write("\nCache Task:\n");
        console.log(cacheTask);

        rl.question('\nUpdate App with cached value? (Y/N) or (1/2) or 3 to merge all: ', (answer) => {
            if(answer.toLowerCase() === 'y' || answer === '1') {
                writeMerge(appPath, appTask, appKey, cacheTask, cacheKey);
                rl.question(`\n\n${appPath} updated`, mergeDiffTasks);
            }
            else if(answer === "3") mergeAllDiffTasks(appPath, appTask, appKey, cacheTask, cacheKey);
            else mergeDiffTasks();
        });
    }

    function mergeAllDiffTasks(appPath, appTask, appKey, cacheTask, cacheKey) {
        // Merge the current diff when "All" was selected
        writeMerge(appPath, appTask, appKey, cacheTask, cacheKey);

        // Merge the rest of the diff tasks
        let totalDiffs = 1;
        while(diffTasks.length) {
            const { appPath, appKey, appTask, cacheKey, cacheTask } = diffTasks.shift();
            writeMerge(appPath, appTask, appKey, cacheTask, cacheKey);
            totalDiffs++;
        }

        rl.question(`\n\n${totalDiffs} tasks updated`, mergeDiffTasks);
    }

    function writeMerge(appPath, appTask, appKey, cacheTask, cacheKey) {
        const json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
        json.tasks.forEach((task) => {
            if(task.id === appTask.id) task[appKey] = trim(cacheTask[cacheKey]);
        });
        fs.writeFileSync(`${appPath}`, JSON.stringify(json, null, 4));
    }

    //------------------------------------------------------------------ Merge new tasks
    function mergeNewTasks() {
        console.clear();

        // Finish workflow
        if(!newTasks.length) {
            logUpdate(`\n${content.config.API_ENDPOINT} Merges Completed!!!`);
            done();
            return;
        }

        // Merge new task
        const tasksToReview = [newTasks.shift()];
        addMatchingTasks(tasksToReview);

        rl.write(`New Task detected ${totalNew - newTasks.length}/${totalNew}:\n`);
        tasksToReview.forEach((t) => rl.write(`${t.appPath}\n`));
        console.log(tasksToReview[0].cacheTask);

        rl.question('\nAdd task/s to app? (Y/N) or (1/2) or 3 to add all new tasks ', (answer) => {
            if(answer.toLowerCase() === 'y' || answer === '1') {
                tasksToReview.forEach((t) => {
                    writeFile(t.appPath, t.lang, t.cacheTask);
                    rl.question(`\ntask added to ${t.appPath}`, mergeNewTasks);
                });
            }
            else if(answer === '3') mergeAllNewTasks(tasksToReview);
            else mergeNewTasks();
        });
    }

    function addMatchingTasks(tasksToReview) {
        for(let i = 0; i < newTasks.length; i++) {
            if(newTasks[i].cacheTask.ID === tasksToReview[0].cacheTask.ID) {
                tasksToReview.push(newTasks[i]);
                newTasks.splice(i, 1);
                i--;
            }
        }
    }

    function mergeAllNewTasks(tasksToReview) {
        // Merge the current task/s when "All" was selected
        tasksToReview.forEach((t) => writeFile(t.appPath, t.lang, t.cacheTask));

        // Merge the rest of the new tasks
        let totalAdded = 1;
        while(newTasks.length) {
            const { appPath, lang, cacheTask } = newTasks.shift();

            writeFile(appPath, lang, cacheTask);
            totalAdded++;
        }

        rl.question(`\n\n${totalAdded} tasks added`, mergeNewTasks);
    }

    function writeFile(appPath, lang, cacheTask) {
        let json = {};

        if(fs.existsSync(appPath)) {
            json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
            json.tasks.push(content.mapAppTask(cacheTask, lang));
        }
        else {
            json = {
                groupName: "PLACEHOLDER",
                tasks: [content.mapAppTask(cacheTask, lang)]
            };
        }

        fs.writeFileSync(appPath, JSON.stringify(json, null, 4));
    }
};

function trim(val) {
    return (typeof val === "string") ? val.trim() : val;
}