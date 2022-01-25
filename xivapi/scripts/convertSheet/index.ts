import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

/** Takes the contents of ./sheet.txt which should be pasted directly from a sheet
 * and converts it into a json file using the CONFIG array as keys where the index
 * within the array matches the column in the sheet
 * */

const DIR = `./scripts/convertSheet`;
const SHEET = path.join(DIR, 'sheet.txt');
const OUTPUT = path.join(DIR, 'output.json');

// Can contain blank keys which indicates that column isn't mapped to the output json
const CONFIG = ['en', 'name', 'iLvl', 'primeLocation', 'fishingHoles', 'type', 'bait'];

console.log(`Converting ${chalk.green(SHEET)}`);
convertSheetToJSON();
console.log(`Output ${chalk.green(OUTPUT)}`);

function convertSheetToJSON() {
    const sheet = fs.readFileSync(SHEET, 'utf8');
    const lines = sheet.split('\r\n');

    const json: any[] = [];

    lines.forEach((line) => {
        const cells = line.split('\t');

        const obj: any = {};
        cells.forEach((cell, i) => {
            if(CONFIG[i]) obj[CONFIG[i]] = cell;
        });

        json.push(obj);
    });

    fs.writeFileSync(OUTPUT, JSON.stringify(json, null, 4));
}
