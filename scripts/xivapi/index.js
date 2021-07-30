const fs = require("fs");
const readline = require('readline');
const logUpdate = require('log-update');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contentOptionPrompt = require("./cli/util/contentOptionPrompt");
const cleanCLI = require("./cli/clean");

// Process entry point
mainScreen();

function mainScreen() {
    logUpdate.clear();
    console.clear();

    rl.write('Welcome\n');
    rl.write('\n1. Cache Management');
    rl.write('\n2. Clean Cache');
    rl.write('\n3. Exit\n');

    rl.question('\nWhat would you like to do? ', async (answer) => {
        switch(answer) {
            case '1': contentOptionPrompt(rl, done); break;
            case '2': cleanCLI(rl, mainScreen); break;
            case '0': {
                const path = `${__dirname}/content/duty/quest/Quest/excludedIds.json`;
                const file = JSON.parse(fs.readFileSync(path));
                console.log(Object.keys(file).includes("66244"));

                done();
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
