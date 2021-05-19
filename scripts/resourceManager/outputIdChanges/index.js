const fs = require("fs");
const constants = require("../constants");

/** Outputs ID changes that should be applied to resources using cache
 * */

const BASE_DIR = `${constants.BASE_DIR}/outputIdChanges`;
module.exports = function outputIdChanges(rl, back) {
    console.clear();

    // Grab config file
    const config = JSON.parse(fs.readFileSync(`${BASE_DIR}/config.json`, "utf8"));

    // Validate the config file
    let message = "";
    if(!config.source) message = "Config missing 'source' field";
    if(!config.target) message = "Config missing 'target' field";
    if(!fs.existsSync(config.source)) message = `${config.source} does not exist`;
    if(!fs.existsSync(config.target)) message = `${config.target} does not exist`;

    // Bail if there is an issue with config
    if(!!message) {
        rl.write(`Error: ${message}`);
        done();
        return;
    }

    rl.write(`Displaying ID changes to ${config.target}\nusing ${config.source} as a baseline\n\n`);
    const targetFile = JSON.parse(fs.readFileSync(config.target, "utf8"));

    const changes = [];
    dive(config.source);
    changes.sort((a, b) => a.targetId - b.targetId);

    changes.forEach((c) => {
        const idFrom = c.targetId === undefined ? "?" : c.targetId;
        const idTo = c.sourceId === undefined ? "?" : c.sourceId;

        console.log(`${c.name}: ${idFrom} -> ${idTo}`);
    });

    done();

    function dive(sourcePath) {
        const sourceDirs = fs.readdirSync(sourcePath);

        sourceDirs.forEach((stat) => {
            const fullSourceDir = `${sourcePath}/${stat}`;

            if(fs.lstatSync(fullSourceDir).isDirectory()) {
                dive(fullSourceDir);
            }
            else {
                const sourceFile = JSON.parse(fs.readFileSync(fullSourceDir, "utf8"));
                let found = false;

                targetFile.tasks.forEach((t) => {
                    if(sourceFile.Name_en === t.name) {
                        found = true;
                        changes.push({ name: sourceFile.Name_en, sourceId: sourceFile.ID, targetId: t.id });
                    }
                });

                if(!found) {
                    changes.push({ name: sourceFile.Name_en, sourceId: sourceFile.ID, targetId: -1 });
                }
            }
        });
    }

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', () => back());
    }
};
