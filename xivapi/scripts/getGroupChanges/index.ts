import * as fs from 'fs';
import chalk from 'chalk';

import { diveDir } from '../../src/util/diveDir';

/** Grabs task keys from SOURCES and outputs what group
 * they now belong to in TARGETS
 * */
const SOURCES = [
    '../resources/en/logs/crafting/weaver/housing/housing-1.json',
    '../resources/en/logs/crafting/weaver/housing/housing-2.json',
];
const TARGETS = [
    '../resources/en/logs/crafting/weaver/housing/fixtures.json',
    '../resources/en/logs/crafting/weaver/housing/outdoor.json',
    '../resources/en/logs/crafting/weaver/housing/indoor.json',
    '../resources/en/logs/crafting/weaver/housing/tables-rugs.json',
    '../resources/en/logs/crafting/weaver/housing/tabletop.json',
    '../resources/en/logs/crafting/weaver/housing/wall-mounted.json',
    // '../resources/en/logs/crafting/weaver/housing/other.json',
];

// Map of sources by source dir with array of task keys
const sourceGroups: { [key: string]: string[] } = {};

// Output
const OUTPUT = 'scripts/getGroupChanges/output.txt';
let output = '';

getGroupChanges();

function getGroupChanges(): void {
    let message = '';
    SOURCES.forEach((SOURCE) => {
        if(!fs.existsSync(SOURCE)) message += `${SOURCE} does not exist\n`;
    });
    TARGETS.forEach((TARGET) => {
        if(!fs.existsSync(TARGET)) message += `${TARGET} does not exist\n`;
    });

    // Bail if there is an issue with config
    if(message) {
        console.error(`Error:\n${message}`);
        return;
    }

    // Script header output
    console.log('Getting key changes for:');
    TARGETS.forEach((TARGET) => console.log(chalk.green(TARGET)));
    console.log('Using groups:');
    SOURCES.forEach((SOURCE) => console.log(chalk.green(SOURCE)));

    // meat and potatoes
    SOURCES.forEach((SOURCE) => loadSourceTasks(SOURCE));
    TARGETS.forEach((TARGET) => getGroupChangesFor(TARGET));

    logUnfoundSource();

    fs.writeFileSync(OUTPUT, output);

    console.log(`\nOutput ${chalk.green(OUTPUT)}`);
}

function loadSourceTasks(SOURCE: string): void {
    diveDir(SOURCE, (filePath) => {
        const sourceGroup = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        if(sourceGroup.tasks) {
            sourceGroups[filePath] = Object.keys(sourceGroup.tasks);
        }
        else {
            let message = chalk.red(filePath);
            message += ' does not contain tasks';
            console.log(message);
        }
    });
}

function getGroupChangesFor(TARGET: string): void {
    diveDir(TARGET, (filePath) => {
        const targetFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        Object.keys(targetFile.tasks || {}).forEach((targetTaskKey) => {
            Object.keys(sourceGroups).some((sourcePath) => {
                const index = sourceGroups[sourcePath].indexOf(targetTaskKey);

                if(index !== -1) {
                    // Add line for this task to output
                    output += `${targetTaskKey}: ${sourcePath} > ${filePath}\n`;

                    // Remove task from sourceGroups to enable checking for unfound source tasks
                    sourceGroups[sourcePath].splice(index, 1);

                    // No need to continue sourceGroups loop
                    return true;
                }
            });
        });
    });
}

function logUnfoundSource(): void {
    Object.keys(sourceGroups).forEach((sourcePath) => {
        if(sourceGroups[sourcePath].length) {
            let message = 'Source tasks in ';
            message += chalk.red(sourcePath);
            message += ' not found in targets: ';
            message += chalk.red(sourceGroups[sourcePath]);
            console.log(message);
        }
    });
}
