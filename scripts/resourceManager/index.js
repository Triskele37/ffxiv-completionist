const readline = require('readline');
const logUpdate = require('log-update');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const convertSheetToJSON = require('./convertSheetToJSON');
const reorderTasksByOldName = require('./reorderTasksByOldName');
const reorderTasksBySource = require('./reorderTasksBySource');
const propagateNewTasks = require('./propagateNewTasks');
const mergeFauxIDs = require('./mergeFauxIDs');

// Process entry point
mainScreen();

function mainScreen() {
    logUpdate.clear();

    console.clear();
    rl.write('Welcome\n');
    rl.write('\n1. Convert sheet to JSON');
    rl.write('\n2. Reorder Tasks by Old Name');
    rl.write('\n3. Reorder Tasks by Source');
    rl.write('\n4. Propagate New Tasks');
    rl.write('\n5. Merge Faux Tasks');
    rl.write('\n5. Exit\n');

    rl.question('\nWhat would you like to do? ', async (answer) => {
        switch(answer) {
            case '1': convertSheetToJSON(rl, mainScreen); break;
            case '2': reorderTasksByOldName(rl, mainScreen); break;
            case '3': reorderTasksBySource(rl, mainScreen); break;
            case '4': propagateNewTasks(rl, mainScreen); break;
            case '5': mergeFauxIDs(rl, mainScreen); break;
            default: rl.close();
        }
    });
}
