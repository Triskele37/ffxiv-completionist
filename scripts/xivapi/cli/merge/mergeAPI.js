const fs = require("fs");
const logUpdate = require("log-update");

const constants = require("../../constants");
const utils = require("../../utils");

const mergeDiffTasks = require("./mergeDiff");
const mergeSortTasks = require("./mergeSort");
const mergeNewTasks = require("./mergeNew");

//TODO: sorting likely needs to consider "effective index" by pushing appIndex forward by the count of non-sorted before it

module.exports = function mergeAPI(content, rl, done) {
    const diffTasks = [];
    const sortTasks = [];
    const newTasks = [];

    dive(content.build(), "");

    // Kick off the recursion to merge all identified tasks
    mergeDiffTasks(rl, diffTasks, () => {
        mergeSortTasks(rl, sortTasks, () => {
            mergeNewTasks(rl, content, newTasks, () => {
                logUpdate(`\n${content.config.API_ENDPOINT} Merges Completed!!!`);
                done();
            });
        });
    });

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

        cache.tasks.forEach((cacheTask, cacheIndex) => {
            let newTask = true;

            if(appGroup) {
                // vvv Can be used to reapply IDs
                // const appTask = appGroup.tasks.find((appTask) => cacheTask[`Name_${lang}`] === appTask.name);
                const appTask = appGroup.tasks.find((appTask) => cacheTask.ID === appTask.id);
                const appIndex = appGroup.tasks.findIndex((appTask) => cacheTask.ID === appTask.id);

                if(appTask) {
                    newTask = false;
                    content.MERGE_KEYS.forEach((appKey) => {
                        const cacheKey = content.getCacheKey(appKey, lang);

                        // Different value
                        if(appTask[appKey] !== utils.safeTrim(cacheTask[cacheKey])) {
                            diffTasks.push({ appPath, appKey, appTask, cacheKey, cacheTask });
                        }
                    });

                    // Different Index
                    if(cacheIndex !== appIndex) {
                        sortTasks.push({ appPath, appTask, appIndex, cacheIndex });
                    }
                }
            }

            // New Task
            if(newTask) newTasks.push({ appPath, lang, cacheTask, cacheIndex });
        });
    }
};
