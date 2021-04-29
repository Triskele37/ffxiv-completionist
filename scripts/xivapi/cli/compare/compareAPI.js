const fs = require('fs');
const logUpdate = require('log-update');
const getSafeName = require('../util/getSafeName');

const BASE_STATIC_DIR = './static';

module.exports = function compareAPI(config, buildCb) {
    const totalChanges = dive(`${BASE_STATIC_DIR}/${getSafeName(config.API_ENDPOINT)}`, buildCb());

    logUpdate(`\n${config.API_ENDPOINT} Comparison Completed!!! ${totalChanges} changes found.`);
};

function dive(path, buildData) {
    let changes = 0;

    // Dive each category
    if(buildData.keys && buildData.keys.length) {
        buildData.keys.forEach((key) => changes += dive(`${path}/${key}`, buildData[key]));
    }

    // Perform the actual comparisons
    if(buildData.tasks.length) {
        logUpdate(`Comparing tasks for ${path}`);

        if(fs.existsSync(`${path}.json`)) {
            const staticTasks = JSON.parse(fs.readFileSync(`${path}.json`, 'utf8'));

            checkForDeprecatedTasks(buildData.tasks, staticTasks);

            buildData.tasks.forEach((buildTask) => {
                const staticTask = staticTasks.find((staticTask) => staticTask.ID === buildTask.ID);

                // Check for new tasks not in static
                if(!staticTask) {
                    console.log(`New task not in static: ${buildTask.ID}\n`);
                }
                else {
                    changes += compareProperties(buildTask, staticTask, path);
                }
            });
        }
        else {
            console.log(`New section`);
        }
    }

    return changes;
}

//-----------------------------------------------------------------------------
// Checks for tasks that are in static but not build
//-----------------------------------------------------------------------------
function checkForDeprecatedTasks(buildTasks, staticTasks) {
    staticTasks.forEach((staticTask) => {
        const buildTask = buildTasks.find((buildTask) => staticTask.ID === buildTask.ID);

        if(!buildTask && staticTask.ID !== -1) {
            console.log(`Deprecated task left in static: ${staticTask.ID}`);
        }
    });
}

//-----------------------------------------------------------------------------
// Compare build and static task properties for differences or new values
//-----------------------------------------------------------------------------
function compareProperties(buildTask, staticTask, path) {
    const properties = Object.keys(buildTask);
    let changes = 0;

    properties.forEach((property) => {
        const isBuildPropertyUnset = buildTask[property] === undefined || buildTask[property] === null;
        const isStaticPropertyUnset = staticTask[property] === undefined || staticTask[property] === null;
        const isPropertyDiff = buildTask[property] !== staticTask[property];

        let message = '';
        if(isBuildPropertyUnset && !isStaticPropertyUnset) message = `Extra property on static: ${property}`;
        else if(isStaticPropertyUnset && !isBuildPropertyUnset) message = `New Property on build: ${property}`;
        else if(isPropertyDiff && !isBuildPropertyUnset && !isStaticPropertyUnset) {
            message = `Property does not match: ${property}`;
            message += `\nStatic value: ${staticTask[property]}`;
            message += `\nBuild  value: ${buildTask[property]}`;
        }

        if(message) {
            console.log(`${path}/${buildTask.ID}`);
            console.log(`${message}\n\n`);

            changes++;
        }
    });

    return changes;
}
