const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cacheCLI = require('./cli/cache');
const buildCLI = require('./cli/build');

// Process entry point
mainScreen();

function mainScreen() {
    console.clear();
    rl.write('Welcome\n');
    rl.write('\n1. Cache');
    rl.write('\n2. Build');
    rl.write('\n3. Custom');
    rl.write('\n4. Exit\n');

    rl.question('\nWhat would you like to do? ', async (answer) => {
        switch(answer) {
            case '1': cacheCLI(rl, mainScreen); break;
            case '2': buildCLI(rl, mainScreen); break;
            case '3': {
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
