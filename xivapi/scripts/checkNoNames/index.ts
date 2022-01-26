import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

/** Checks TARGET for cached tasks with an empty Name field
 * */

const DIR = `./scripts/checkNoNames`;
const TARGET = './cache/Fate';
const OUTPUT = path.join(DIR, 'output.json');
const output = {
    blank: [],
    undef: []
};

console.log(`Checking ${chalk.green(TARGET)} for blank Name resources`);
checkNoNames();
console.log(`Output ${chalk.green(OUTPUT)}`);

function checkNoNames() {
    dive(TARGET);

    const numSort = (a, b) => a - b;
    output.blank.sort(numSort);
    output.undef.sort(numSort);

    fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 4));
}

function dive(target: string): void {
    const targetDirs = fs.readdirSync(target);

    targetDirs.forEach((targetDir) => {
        const targetPath = path.join(target, targetDir);

        if(fs.lstatSync(targetPath).isDirectory()) {
            dive(targetPath);
        }
        else {
            check(targetPath);
        }
    });
}

function check(target: string): void {
    const cache = JSON.parse(fs.readFileSync(target, 'utf8'));

    if(cache.Name === '') output.blank.push(cache.ID);
    if(cache.Name === undefined) output.undef.push(cache.ID);
}
