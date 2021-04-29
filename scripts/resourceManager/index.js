const readline = require('readline');
const logUpdate = require('log-update');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const convertSheetToJSON = require('./convertSheetToJson');

// Process entry point
mainScreen();

function mainScreen() {
    logUpdate.clear();

    console.clear();
    rl.write('Welcome\n');
    rl.write('\n1. Convert sheet to JSON');
    rl.write('\n2. Exit\n');

    rl.question('\nWhat would you like to do? ', async (answer) => {
        switch(answer) {
            case '1': convertSheetToJSON(done, mainScreen); break;
            case '2': {
                done();
                break;
            }
            default: rl.close();
        }
    });

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', () => mainScreen());
    }
}
