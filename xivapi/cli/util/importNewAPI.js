const fs = require("fs");
const logUpdate = require('log-update');

const getSafeName = require('./getSafeName');

const BASE_STATIC_DIR = './static';

module.exports = function importNewAPI(config, build) {
    const path = `${BASE_STATIC_DIR}/${getSafeName(config.API_ENDPOINT)}`;
    dive(config, build(), path);

    logUpdate(`\n${config.API_ENDPOINT} New Imports Completed!!!`);
};

function dive(config, buildObj, path) {
    if(buildObj.keys.length) {
        buildObj.keys.forEach((key) => dive(config, buildObj[key], `${path}/${key}`));
    }

    if(buildObj.tasks.length) {
        const staticTasks = fs.existsSync(`${path}.json`) ?
            JSON.parse(fs.readFileSync(`${path}.json`, 'utf8')) : [];

        let newTasksAdded = false;
        buildObj.tasks.forEach((buildTask) => {
            const staticTask = staticTasks.find((staticTask) => staticTask.ID === buildTask.ID);

            // Check for new tasks not in static
            if(!staticTask) {
                logUpdate(`\nImporting ${path}`);
                newTasksAdded = true;

                staticTasks.push(buildTask);
            }
        });

        if(newTasksAdded) fs.writeFileSync(`${path}.json`, JSON.stringify(staticTasks, null, 4));
    }
}
