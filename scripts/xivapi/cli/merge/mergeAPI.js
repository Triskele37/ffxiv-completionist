const fs = require("fs");
const logUpdate = require('log-update');

const constants = require("../../constants");

//TODO: Merge new tasks that have the same ID but differing lang so only one action does both

module.exports = function mergeAPI(content, rl, done) {
    const diffTasks = [];
    const newTasks = [];

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
        if(cache.tasks.length && !content.mergePathExcluded(path)) {
            analyzeTasks(cache, path, "en");
            analyzeTasks(cache, path, "fr");
        }
    }

    function analyzeTasks(cache, path, lang) {
        let appPath = `${constants.RESOURCES}/${lang}/${content.config.APP_PATH}/${path}.json`;
        if(content.getAppPath) appPath = content.getAppPath(appPath);

        const appGroup = fs.existsSync(appPath) ? JSON.parse(fs.readFileSync(appPath, 'utf8')) : {};

        cache.tasks.forEach((cacheTask) => {
            if(!appGroup.tasks) console.log(`\n${appPath} tasks not found\n`);
            const appTask = appGroup.tasks.find((appTask) => cacheTask.ID === appTask.id);

            if(appTask) {
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
            else {
                newTasks.push({ appPath, lang, cacheTask });
            }
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

        rl.question('\nUpdate App with cached value? (Y/N) or (1/2) ', (answer) => {
            if(answer.toLowerCase() === 'y' || answer === '1') {
                const json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
                json.tasks.forEach((task) => {
                    if(task.id === appTask.id) task[appKey] = trim(cacheTask[cacheKey]);
                });
                fs.writeFileSync(`${appPath}`, JSON.stringify(json, null, 4));

                rl.question(`\n\n${appPath} updated`, mergeDiffTasks);
            }
            else mergeDiffTasks();
        });
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
        const { appPath, lang, cacheTask } = newTasks.shift();

        rl.write(`New Task detected ${totalNew - newTasks.length}/${totalNew}: ${appPath}\n`);
        console.log(cacheTask);

        rl.question('\nAdd task to app? (Y/N) or (1/2) or 3 to add all new tasks ', (answer) => {
            if(answer.toLowerCase() === 'y' || answer === '1') {
                const json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
                json.tasks.push(content.mapAppTask(cacheTask, lang));
                fs.writeFileSync(`${appPath}`, JSON.stringify(json, null, 4));

                rl.question(`\n\ntask added to ${appPath}`, mergeNewTasks);
            }
            else if(answer === '3') mergeAllNewTasks(appPath, lang, cacheTask);
            else mergeNewTasks();
        });
    }

    function mergeAllNewTasks(curAppPath, curLang, curCacheTask) {
        // Merge the current task when "All" was selected
        const json = JSON.parse(fs.readFileSync(curAppPath, 'utf8'));
        json.tasks.push(content.mapAppTask(curCacheTask, curLang));
        fs.writeFileSync(`${curAppPath}`, JSON.stringify(json, null, 4));

        // Merge the rest of the new tasks
        let totalAdded = 1;
        while(newTasks.length) {
            const { appPath, lang, cacheTask } = newTasks.shift();

            const json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
            json.tasks.push(content.mapAppTask(cacheTask, lang));
            fs.writeFileSync(`${appPath}`, JSON.stringify(json, null, 4));

            totalAdded++;
        }

        rl.question(`\n\n${totalAdded} tasks added`, mergeNewTasks);
    }
};

function trim(val) {
    return (typeof val === "string") ? val.trim() : val;
}