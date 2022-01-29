import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

import { diveDir } from '../../src/util/diveDir';

/**
 * */

// Whether to log that cache doesn't contain app task
const logNoSourceMatch = false;

const SOURCE = 'cache/fate';
const SOURCE_PROPERTY = 'Name_en';
const TARGETS = [
    '../resources/en/duty/fate',
    '../resources/en/duty/exploratory-missions/eureka/notorious-monsters',
    '../resources/en/duty/exploratory-missions/bozja/events.json',
];
const TARGET_PROPERTY = 'name';
const OUTPUT = 'scripts/getKeyChanges/output.json';

const sourceProps: { [property: string]: any[] } = {};
const sourceFound = [];
const output: {
    [group: string]: { // duty.fate.mor-dhona (makes mapKeyChanges easier)
        app: string; // 'x123'
        cache: number[]; // to ensure items with duplicate cache tasks aren't assigned
        property: any; // ez reference
    }[];
} = {};

getKeyChanges();

function getKeyChanges(): void {
    let message;
    if(!fs.existsSync(SOURCE)) message = `${SOURCE} does not exist`;
    TARGETS.forEach((TARGET) => {
        if(!fs.existsSync(TARGET)) message = `${TARGET} does not exist`;
    });

    // Bail if there is an issue with config
    if(message) {
        console.error(`Error: ${message}`);
        return;
    }

    console.log('Getting key changes for:');
    TARGETS.forEach((TARGET) => console.log(chalk.green(TARGET)));
    console.log(`        using keys from ${chalk.green(SOURCE)}\n`);

    loadSourceTasks();

    TARGETS.forEach((TARGET) => {
        getKeyChangesFor(TARGET);
    });

    logUnfoundSource();

    fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 4));

    console.log(`Output ${chalk.green(OUTPUT)}`);
}

function loadSourceTasks(): void {
    diveDir(SOURCE, (filePath) => {
        const sourceTask = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const sourceProperty = sourceTask[SOURCE_PROPERTY]?.trim();

        if(sourceProperty) {
            if(!sourceProps[sourceProperty]) sourceProps[sourceProperty] = [];
            sourceProps[sourceProperty].push(sourceTask.ID);

            if(sourceProps[sourceProperty].length > 1) {
                let message = chalk.red(chalk.red(sourceProperty));
                message += ' matches multiple cached tasks ';
                message += chalk.red(sourceProps[sourceProperty]) + ' ';
                console.log(message);
            }
        }
        else {
            console.log(`Source task ${sourceTask.ID} does not have ${chalk.red(SOURCE_PROPERTY)}`);
        }
    });
}

function getKeyChangesFor(target: string): void {
    diveDir(target, (filePath) => {
        const targetFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        Object.keys(targetFile.tasks || {}).forEach((targetTaskKey) => {
            const targetProperty = targetFile.tasks[targetTaskKey][TARGET_PROPERTY];

            if(sourceProps[targetProperty]) {
                const group = getGroupString(filePath);
                if(!output[group]) output[group] = [];

                sourceFound.push(targetProperty);

                output[group].push({
                    app: targetTaskKey,
                    cache: sourceProps[targetProperty],
                    property: targetProperty
                });
            }
            else if(logNoSourceMatch) {
                let message = 'Target task ';
                message += chalk.red(`${filePath} ${targetTaskKey}`);
                message += ' does not match any source tasks ';
                message += chalk.red(targetProperty);
                console.log(message);
            }
        });
    });
}

function getGroupString(filePath: string): string {
    let groupArr = filePath.split(path.sep);
    groupArr = groupArr.slice(groupArr.indexOf('en') + 1);

    const groupStr = groupArr.join('.');
    return groupStr.replace('.json', '');
}

function logUnfoundSource(): void {
    Object.keys(sourceProps).forEach((sourceProp) => {
        if(!sourceFound.includes(sourceProp)) {
            let message = 'Cache task ';
            message += chalk.red(sourceProps[sourceProp]);
            message += ' not found in target ';
            message += chalk.red(sourceProp);
            console.log(message);
        }
    });
}
