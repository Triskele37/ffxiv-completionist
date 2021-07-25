const fs = require("fs");
const logUpdate = require("log-update");

const constants = require("../../constants");
const utils = require("../../utils");

const buildAPI = require("../util/buildAPI");

const mergeDiffTasks = require("./mergeDiff");
const mergeNewTasks = require("./mergeNew");

module.exports = function mergeAPI(content, rl, done) {
    const diffTasks = [];
    const newTasks = [];

    dive(buildAPI(content), "");

    // Kick off the recursion to merge all identified tasks
    mergeDiffTasks(rl, diffTasks, () => {
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
        if(!path) appPath = appPath.replace("/.json", ".json");

        if(content.getAppPath) appPath = content.getAppPath(appPath);

        // Allow content to exclude some paths
        if(content.excludeAppPathMerge && content.excludeAppPathMerge(appPath)) return;

        const cmnPath = appPath.replace(lang, "common");
        const appGroup = fs.existsSync(appPath) ? JSON.parse(fs.readFileSync(appPath, "utf8")) : null;
        const cmnGroup = fs.existsSync(appPath) ? JSON.parse(fs.readFileSync(cmnPath, "utf8")) : null;

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
                }
            }

            if(content.COMMON_KEYS && cmnGroup) {
                const cmnTask = cmnGroup.tasks.find((t) => cacheTask.ID === t.id);

                if(cmnTask) {
                    content.COMMON_KEYS.forEach((cmnKey) => {
                        const cacheKey = content.getCacheKey(cmnKey, lang);

                        // Different Value
                        if(cmnTask[cmnKey] !== utils.safeTrim(cacheTask[cacheKey])) {
                            diffTasks.push({ appPath: cmnPath, appKey: cmnKey, appTask: cmnTask, cacheKey, cacheTask });
                        }
                    });
                }
            }

            // New Task
            if(newTask) newTasks.push({ appPath, lang, cacheTask, cacheIndex });
        });
    }
};
