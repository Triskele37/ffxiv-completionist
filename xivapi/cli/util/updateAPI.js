const fs = require("fs");
const logUpdate = require('log-update');

const getSafeName = require('./getSafeName');

const BASE_STATIC_DIR = './static2';

module.exports = function updateAPI(config, build) {
    const path = `${BASE_STATIC_DIR}/${getSafeName(config.API_ENDPOINT)}`;
    dive(config, build(), path);

    logUpdate(`\n${config.API_ENDPOINT} Update Completed!!!`);
};

function dive(config, buildObj, path) {
    if(buildObj.keys.length) {
        buildObj.keys.forEach((key) => dive(config, buildObj[key], `${path}/${key}`));
    }

    if(buildObj.tasks.length) {
        logUpdate(`\nUpdating ${path}`);
        fs.writeFileSync(`${path}.json`, buildObj.tasks);
    }
}
