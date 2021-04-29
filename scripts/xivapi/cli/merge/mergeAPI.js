const fs = require("fs");
const logUpdate = require('log-update');

const constants = require("../../constants");
const getSafeName = require('../util/getSafeName');

module.exports = function mergeAPI(content, rl, done) {
    const diffTasks = [];
    const newTasks = [];

    const cachePath = `${getSafeName(content.config.API_ENDPOINT)}`;
    dive(content.build(), cachePath);

    // mergeDiffTasks > mergeNewTasks > done
    mergeDiffTasks();

    //------------------------------------------------------------------ Look for things to merge
    function dive(cache, path) {
        // Recurse all groups within content type
        if(cache.keys.length) {
            cache.keys.forEach((key) => dive(cache[key], `${path}/${key}`));
        }

        // Initialize merge of cached & app tasks
        if(cache.tasks.length) {
            analyzeTasks(cache, path, "en");
            analyzeTasks(cache, path, "fr");
        }
    }

    function analyzeTasks(cache, path, lang) {
        let appPath = `${constants.RESOURCES}/${lang}/${content.config.APP_PATH}/${path}.json`;
        appPath = content.translateCachePath(appPath);

        const appGroup = fs.existsSync(appPath) ? JSON.parse(fs.readFileSync(appPath, 'utf8')) : [];

        cache.tasks.forEach((cacheTask) => {
            if(!appGroup.tasks) console.log(appPath);
            const appTask = appGroup.tasks.find((appTask) => cacheTask.ID === appTask.id);

            if(appTask) {
                content.MERGE_KEYS.forEach((appKey) => {
                    const cacheKey = content.translateKeys(appKey, lang);

                    if(appTask[appKey] !== cacheTask[cacheKey]) {
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
        console.clear();

        // Continue workflow
        if(!diffTasks.length) {
            mergeNewTasks();
            return;
        }

        // Merge diff'd tasks
        const { appPath, appKey, appTask, cacheKey, cacheTask } = diffTasks.shift();

        rl.write(`Diff detected: ${appPath}\n`);
        rl.write(`Key: ${appKey}\n\n`);
        rl.write(`  App Value: ${appTask[appKey]}\n`);
        rl.write(`Cache Value: ${cacheTask[cacheKey]}\n`);

        rl.question('\nUpdate App with cached value? (Y/N)', (answer) => {
            if(answer.toLowerCase() === 'y') {
                const json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
                json.tasks.forEach((task) => {
                    if(task.ID === appTask.id) task[appKey] = cacheTask[cacheKey];
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

        rl.write(`New Task detected: ${appPath}\n`);
        console.log(cacheTask);

        rl.question('\nAdd task to app? (Y/N)', (answer) => {
            if(answer.toLowerCase() === 'y') {
                const json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
                json.tasks.push(content.mapAppTask(cacheTask, lang));
                fs.writeFileSync(`${appPath}`, JSON.stringify(json, null, 4));

                rl.question(`\n\ntask added to ${appPath}`, mergeNewTasks);
            }
            else mergeNewTasks();
        });
    }
};
