import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

const RESOURCE_DIRS = ['common', 'en', 'fr'];
const RESOURCES = '../resources';
const OUTPUT = 'scripts/getKeyChanges/migration.txt';
const CHANGES = 'scripts/getKeyChanges/output.json';
let output = '';

console.log(`Mapping key changes from ${chalk.green(CHANGES)}\n`);
const changes = JSON.parse(fs.readFileSync(CHANGES, 'utf8'));
mapKeyChanges();

if(output) {
    console.log(`\nMigration data: ${chalk.green(OUTPUT)}`);
    fs.writeFileSync(OUTPUT, output);
}

function mapKeyChanges() {
    RESOURCE_DIRS.forEach((locale, localeIndex) => {
        Object.keys(changes).forEach((group) => {
            const filePath = path.join(RESOURCES, locale, ...group.split('.')) + '.json';
            const originalFile = fs.readFileSync(filePath, 'utf8');
            let fileAsText = originalFile;
            let firstLine = true;

            // Generate the migration file's GROUP var
            let groupVar = group.split('.').pop();
            groupVar = groupVar.toUpperCase().replace(/-/g, '_');

            changes[group].forEach((change) => {
                const appId = parseInt(change.app.substr(1), 10);
                const newId = change.cache[0];

                if(change.cache.length > 1) {
                    let message = chalk.red(group + '.' + change.app);
                    message += ' has multiple cache matches, skipping map';
                    console.log(message);
                }
                else if(appId !== newId) {
                    fileAsText = updateAppTaskKey(fileAsText, filePath, appId, newId);

                    if(localeIndex === 0) { // only needs to be done once
                        if(firstLine) {
                            output += `\nconst ${groupVar} = '${group}'; //#region`;
                        }

                        output += `\nstore.changeKey(${groupVar}, ${appId}, ${newId});`;
                        firstLine = false;
                    }
                }
            });

            if(fileAsText !== originalFile) {
                if(localeIndex === 0) { // Finish the migration code's group block
                    output += ' //#endregion\n';
                }
                fs.writeFileSync(filePath, fileAsText);
                console.log(`${chalk.green(filePath)} Updated`);
            }
        });
    });
}

function updateAppTaskKey(fileAsText: string, filePath: string, appId: number, newId: number): string {
    // Ensure both are wrapped in quotes so x1 doesn't match x10 etc
    const find = `"x${appId}"`;
    const replace = `"x${newId}"`;

    if(fileAsText.indexOf(find) !== fileAsText.lastIndexOf(find)) {
        let message = chalk.red(find);
        message += ' found multiple times in ';
        message += chalk.green(filePath);
        console.log(message);
    }
    else {
        return fileAsText.replace(find, replace);
    }

    return fileAsText;
}
