const fs = require('fs');
const logUpdate = require('log-update');
const buildAchievements = require('./build');

const STATIC_DIR = './static/achievement';

module.exports = function compareAchievements(done) {
    const builtObj = buildAchievements();
    dive(STATIC_DIR, builtObj);

    logUpdate('Comparison completed');

    done();
};

function dive(path, builtObj) {
    if(builtObj.keys && builtObj.keys.length) {
        builtObj.keys.forEach((key) => {
            dive(`${path}/${key}`, builtObj[key]);
        });
    }

    if(builtObj.tasks.length) {
        logUpdate(`Comparing tasks for ${path}`);

        const staticFile = JSON.parse(fs.readFileSync(`${path}.json`, 'utf8'));

        builtObj.tasks.forEach((builtTask) => {
            const compareTask = staticFile.find((staticTask) => staticTask.ID === builtTask.ID);

            if(!compareTask) {
                console.log(`\nStatic missing ${builtTask.ID}`);
            }
            else {
                Object.keys(builtTask).forEach((key) => {
                    if(compareTask[key] !== builtTask[key] && builtTask[key] !== undefined && builtTask[key] !== null) {
                        console.log(`\n${path}/${builtTask.ID}`);
                        console.log(`Mismatched property: ${key}`);
                        console.log(`Static: ${compareTask[key]}`);
                        console.log(`API: ${builtTask[key]}`)
                    }
                });
            }
        });
    }
}
