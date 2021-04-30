const fs = require("fs");
const constants = require("../constants");

const BASE_DIR = `${constants.BASE_DIR}/reorderTasksBySource`;
module.exports = function reorderTasksBySource(rl, back) {
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

    rl.write(`Reordering ${config.target} tasks\n using ${config.source}\n\n`);
    dive(config.source, config.target);

    done();

    function dive(sourcePath, targetPath) {
        const sourceDirs = fs.readdirSync(sourcePath);

        sourceDirs.forEach((sourceDir) => {
            const fullSourceDir = `${sourcePath}/${sourceDir}`;
            const fullTargetDir = `${targetPath}/${sourceDir}`;

            if(fs.lstatSync(fullSourceDir).isDirectory()) {
                dive(fullSourceDir, fullTargetDir);
            }
            else {
                const sourceFile = JSON.parse(fs.readFileSync(fullSourceDir, "utf8"));
                const targetFile = JSON.parse(fs.readFileSync(fullTargetDir, "utf8"));

                if(sourceFile.tasks && targetFile.tasks) {
                    const order = sourceFile.tasks.map((t) => t.id);
                    targetFile.tasks.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

                    rl.write(`Updating task order for: ${fullTargetDir}\n`);

                    fs.writeFileSync(fullTargetDir, JSON.stringify(targetFile, null, 4));
                }
            }
        });
    }

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', () => back());
    }
};
