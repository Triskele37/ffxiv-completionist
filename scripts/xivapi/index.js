const readline = require('readline');
const logUpdate = require('log-update');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cacheCLI = require('./cli/cache');
const compareCLI = require('./cli/compare');
const mergeCLI = require('./cli/merge');

// Process entry point
mainScreen();

function mainScreen() {
    logUpdate.clear();

    console.clear();
    rl.write('Welcome\n');
    rl.write('\n1. Cache');
    rl.write('\n2. Compare');
    rl.write('\n3. Merge');
    rl.write('\n4. Custom');
    rl.write('\n5. Exit\n');

    rl.question('\nWhat would you like to do? ', async (answer) => {
        switch(answer) {
            case '1': cacheCLI(rl, mainScreen); break;
            case '2': compareCLI(rl, mainScreen); break;
            case '3': mergeCLI(rl, mainScreen); break;
            case '4': {
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

//xivapi.com/Recipe/33891 = Stuffed Highland Cabbage

// Mount
// Leve
// Emote
// InstanceContent
// Fate
// Orchestrion
