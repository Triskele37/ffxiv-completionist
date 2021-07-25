const fs = require("fs");

const constants = require("../../constants");

// Removes common keys from lang json
module.exports = function removeExcluded(rl, content, indentation) {
    const hasAppData = !!content.config.APP_PATH;

    if(hasAppData && content.hasCommonKeys()) {
        dive("en", `${constants.RESOURCES}/en/${content.config.APP_PATH}`);
        dive("fr", `${constants.RESOURCES}/fr/${content.config.APP_PATH}`);
    }

    function dive(lang, path) {
        let dirs = fs.existsSync(path) ? fs.readdirSync(path) : [];

        // for single-level content
        if(fs.existsSync(`${path}.json`)) {
            const split = path.split('/');
            const last = split.pop();
            path = split.join('/');
            dirs = [`${last}.json`];
        }

        dirs.forEach((dir) => {
            const fileName = dir.replace(".json", "");
            const newPath = `${path}/${dir}`;

            if(dir === fileName) dive(lang, newPath);
            else if(fileName !== "index") {
                analyzeTaskKeys(lang, newPath);
            }
        });
    }

    function analyzeTaskKeys(lang, path) {
        const group = JSON.parse(fs.readFileSync(path, 'utf8'));
        let shouldUpdate = false;
        let commonKeysFound = [];

        group.tasks.forEach((task) => {
            content.COMMON_KEYS.forEach((commonKey) => {
                if(task[commonKey] !== undefined) {
                    shouldUpdate = true;

                    // Add an id/key/value pair for each one found
                    if(lang === "en") {
                        commonKeysFound.push({
                            id: task.id,
                            key: commonKey,
                            value: task[commonKey]
                        });
                    }

                    // Remove key from lang task
                    delete task[commonKey];
                }
            });
        });

        // Write changes back to app if any were found
        if(shouldUpdate) {
            if(commonKeysFound.length > 0) {
                const commonPath = path.replace(lang, "common");
                let commonGroup = { groupName: "PLACEHOLDER", tasks: [] };

                if(fs.existsSync(commonPath)) {
                    commonGroup = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
                }

                commonKeysFound.forEach((found) => {
                    const { id, key, value } = found;
                    const commonIndex = commonGroup.tasks.findIndex((t) => t.id === id);

                    if(commonIndex !== -1) {
                        commonGroup.tasks[commonIndex][key] = value;
                    }
                    else {
                        commonGroup.tasks.push({ id, [key]: value });
                    }
                });

                fs.writeFileSync(commonPath, JSON.stringify(commonGroup, null, 4));
            }

            // Write back the lang and common files
            rl.write(`${indentation}Removing common keys from ${path}\n`);
            fs.writeFileSync(path, JSON.stringify(group, null, 4));
        }
    }
};
