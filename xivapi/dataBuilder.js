const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cacheCLI = require('./cli/cachePrompt');
const compareCLI = require('./cli/comparePrompt');
const buildCLI = require('./cli/buildPrompt');

// Process entry point
mainScreen();

function mainScreen() {
    console.clear();
    rl.write('Welcome\n');
    rl.write('\n1. Cache');
    rl.write('\n2. Compare');
    rl.write('\n3. Build');
    rl.write('\n4. Custom');
    rl.write('\n5. Exit\n');

    rl.question('\nWhat would you like to do? ', async (answer) => {
        switch(answer) {
            case '1': cacheCLI(rl, mainScreen); break;
            case '2': compareCLI(rl, mainScreen); break;
            case '3': buildCLI(rl, mainScreen); break;
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
