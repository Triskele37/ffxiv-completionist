const fs = require("fs");
const constants = require("../constants");

const BASE_DIR = `${constants.BASE_DIR}/propagateNewTasks`;
module.exports = function propagateNewTasks(rl, back) {
    console.clear();

    // Grab config file
    const config = JSON.parse(fs.readFileSync(`${BASE_DIR}/config.json`, "utf8"));

    // Validate the config file
    let message = "";
    if(!config.source) message = "Config missing 'source' field";
    if(!config.targetLangs) message = "Config missing 'targetLangs' field";
    if(!config.targetLangs.length) message = "Config missing items in 'targetLangs' field";
    if(!fs.existsSync(config.source)) message = `${config.source} does not exist`;
    (config.targetLangs || []).forEach((lang) => {
        const target = config.source.replace("en", lang);
        if(!fs.existsSync(target)) message = `${target} does not exist`
    });

    // Bail if there is an issue with config
    if(!!message) {
        rl.write(`Error: ${message}`);
        done();
        return;
    }

    rl.write(`Propagating ${config.source} tasks\n\n`);
    dive(config.source);

    done();

    function dive(sourcePath) {
        const sourceDirs = fs.lstatSync(sourcePath).isDirectory() ?
            fs.readdirSync(sourcePath) :
            [""];

        sourceDirs.forEach((sourceDir) => {
            const fullSourceDir = `${sourcePath}${sourceDir ? "/" + sourceDir : ""}`;

            if(fs.lstatSync(fullSourceDir).isDirectory()) {
                dive(fullSourceDir);
            }
            else {
                const sourceFile = JSON.parse(fs.readFileSync(fullSourceDir, "utf8"));

                config.targetLangs.forEach((lang) => {
                    const targetPath = fullSourceDir.replace("en", lang);
                    const targetFile = JSON.parse(fs.readFileSync(targetPath, "utf8"));

                    if(sourceFile.tasks && targetFile.tasks) {
                        let totalAdded = 0;

                        sourceFile.tasks.forEach((task, i) => {
                            if(!targetFile.tasks[i] || task.id !== targetFile.tasks[i].id) {
                                targetFile.tasks.splice(i, 0, task);
                                totalAdded++;
                            }
                        });

                        rl.write(`${totalAdded} tasks added to ${targetPath}\n`);

                        if(totalAdded > 0) {
                            fs.writeFileSync(targetPath, JSON.stringify(targetFile, null, 4));
                        }
                    }
                });
            }
        });
    }

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', () => back());
    }
};
