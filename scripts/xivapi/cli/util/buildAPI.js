const fs = require("fs");
const logUpdate = require('log-update');

const getSafeName = require('./getSafeName');

const BASE_CACHE_DIR = './xivapi/cache';

module.exports = function buildAPI(config, mapProperties) {
    const output = { keys: [], tasks: [] };
    config.mapProperties = mapProperties;

    dive(`${BASE_CACHE_DIR}/${getSafeName(config.API_ENDPOINT)}`, output, config);

    return output;
};

function dive(path, buildObj, config) {
    const dir = fs.readdirSync(path);

    // "item" is the category when its a directory, the ID when its a cached json
    dir.forEach((item) => {
        if(item !== '_error') {
            const newPath = `${path}/${item}`;

            if(fs.lstatSync(newPath).isDirectory()) {
                logUpdate(`Building ${newPath}`);
                buildObj[item] = { keys: [], tasks: [] };
                buildObj.keys.push(item);
                dive(newPath, buildObj[item], config);
            }
            else if(!config.EXCLUDE_IDS.includes(item)) {
                try {
                    const cachedFile = JSON.parse(fs.readFileSync(newPath));
                    const staticFile = config.mapProperties(cachedFile);
                    buildObj.tasks.push(staticFile);
                }
                catch(e) {
                    console.error(newPath);
                    console.error(e);
                }
            }
        }
    });

    if(buildObj.tasks.length) {
        if(buildObj.tasks[0].SortKey) buildObj.tasks.sort((a, b) => a.SortKey - b.SortKey);
        else if(buildObj.tasks[0].Order) buildObj.tasks.sort((a, b) => a.Order - b.Order);
    }
}
