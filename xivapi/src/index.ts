import readline from 'readline';
import logUpdate from 'log-update';

import { CACHE_DIR, skipClears } from './constants';
import { cleanAPI } from './clean';
import { ContentPrompt } from './util/ContentPrompt';

import * as fs from 'fs';
import * as path from 'path';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Process entry point
mainScreen();

function mainScreen() {
    if(!skipClears) {
        logUpdate.clear();
        console.clear();
    }

    rl.write('Welcome\n');
    rl.write('\n1. Cache Management');
    rl.write('\n2. Clean Cache');
    rl.write('\n3. Exit\n');

    rl.question('\nWhat would you like to do? ', async (answer) => {
        switch(answer) {
            case '1': new ContentPrompt(rl, done); break;
            case '2': cleanAPI(rl, mainScreen); break;
            case '0': {

                break;
            }
            default: rl.close();
        }
    });

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', mainScreen);
    }
}
