import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

const RESOURCE_DIRS = ['common', 'en', 'fr'];
const RESOURCES = '../resources';
const OUTPUT = 'scripts/getKeyChanges/migration.txt';
const CHANGES = 'scripts/getKeyChanges/output.json';
let output = '';

// store.changeKey(AZYS_LLA, 5, 881);

const changes = JSON.parse(fs.readFileSync(CHANGES, 'utf8'));
mapKeyChanges();
if(output) {
    fs.writeFileSync(OUTPUT, output);
}

function mapKeyChanges() {
    RESOURCE_DIRS.forEach((locale, localeIndex) => {
        Object.keys(changes).forEach((group) => {
            const filePath = path.join(RESOURCES, locale, ...group.split('.')) + '.json';
            const originalFile = fs.readFileSync(filePath, 'utf8');
            let fileAsText = originalFile;

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
                        addKeyMigration(group, appId, newId);
                    }
                }
            });

            if(fileAsText !== originalFile) {
                if(localeIndex === 0) output += '\n';
                //TODO: write file if changed
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

function addKeyMigration(group: string, appId: number, newId: number): void {
    const migrationLine = `store.changeKey('${group}', ${appId}, ${newId});`;
    output += `${migrationLine}\n`;
}
