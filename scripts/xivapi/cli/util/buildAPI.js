const fs = require("fs");
const logUpdate = require("log-update");

const constants = require("../../constants");
const getSafeName = require("./getSafeName");

/** Outputs an object in the form:
{
    keys: ["key1"],
    tasks: [...cachedTasks],
    key1: {
        ...repeat
    }
}
 * */

module.exports = function buildAPI(config, mapFromCache) {
    const output = { keys: [], tasks: [] };

    const contentDir = `${constants.CACHE_DIR}/${getSafeName(config.API_ENDPOINT)}`;
    dive(contentDir, output, config);

    return output;

    function dive(path, buildObj, config) {
        const dirs = fs.readdirSync(path);

        // Iterate the current directory
        dirs.forEach((stat) => {
            // Bail from building _error directory
            if(stat === "_error") return;

            const newPath = `${path}/${stat}`;
            if(fs.lstatSync(newPath).isDirectory()) {
                logUpdate(`Building ${newPath}`);

                // Add current directory as a key then dive
                buildObj[stat] = { keys: [], tasks: [] };
                buildObj.keys.push(stat);

                dive(newPath, buildObj[stat], config);
            }
            else {
                // Build tasks from the cached data
                const cachedFile = JSON.parse(fs.readFileSync(newPath, "utf8"));
                const cacheTask = mapFromCache(cachedFile);

                // mapCacheTasks can either return a single task or multiple
                if(Array.isArray(cacheTask)) buildObj.tasks.push(...cacheTask);
                else buildObj.tasks.push(cacheTask);
            }
        });

        // Try to sort if XIVAPI came with a sort key
        if(buildObj.tasks.length) {
            if(buildObj.tasks[0].SortKey) buildObj.tasks.sort((a, b) => a.SortKey - b.SortKey);
            else if(buildObj.tasks[0].Order) buildObj.tasks.sort((a, b) => a.Order - b.Order);
        }
    }
};
