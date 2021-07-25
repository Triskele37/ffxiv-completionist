const logUpdate = require("log-update");

const constants = require("../../constants");
const buildAPI = require("../util/buildAPI");

const ChangeData = require("./ChangeData");
const getCombinedAppGroup = require("./getCombinedAppGroup");
const mergeDiffTasks = require("./mergeDiff");
const mergeNewTasks = require("./mergeNew");

module.exports = function mergeAPI(content, rl, done) {
    const diffTasks = [];
    const newTasks = [];

    dive(buildAPI(content), "");

    // Kick off the recursion to merge all identified tasks
    mergeDiffTasks(rl, content, diffTasks, () => {
        mergeNewTasks(rl, content, newTasks, () => {
            logUpdate(`\n${content.config.API_ENDPOINT} Merges Completed!!!`);
            done();
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

        // Allow for self-named content paths e.g. contentType.json
        if(!path) appPath = appPath.replace("/.json", ".json");

        // Allow override of the appPath
        if(content.getAppPath) appPath = content.getAppPath(appPath);

        // Allow content to exclude some paths
        if(content.excludeAppPathMerge && content.excludeAppPathMerge(appPath)) return;

        // Read the actual file content in
        const appGroup = getCombinedAppGroup(appPath, lang);

        // Loop over the cached version of the task list
        // TODO: this will miss removed tasks left in the app
        cache.tasks.forEach((cacheTask, cacheIndex) => {
            const changeData = new ChangeData({ content, lang, appPath, cacheTask, cacheIndex });

            if(appGroup) {
                changeData.setAppTaskInfo(appGroup.tasks);

                if(changeData.appTask) {
                    changeData.isNew = false;

                    content.MERGE_KEYS.forEach((appKey) => {
                        changeData.setTaskKeyInfo(appKey);

                        // Different value
                        if(changeData.tasksHaveDiff()) diffTasks.push(ChangeData.clone(changeData));
                    });
                }
            }

            // New Task
            if(changeData.isNew) newTasks.push(changeData);
        });
    }
};
