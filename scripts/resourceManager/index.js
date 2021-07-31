const readline = require('readline');
const logUpdate = require('log-update');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const convertSheetToJSON = require('./convertSheetToJSON');
const reorderTasksBySource = require('./reorderTasksBySource');
const outputIdChanges = require('./outputIdChanges');
const convertTasksToObject = require('./convertTasksToObject');

// Process entry point
mainScreen();

function mainScreen() {
    logUpdate.clear();

    console.clear();
    rl.write('Welcome\n');
    rl.write('\n1. Convert sheet to JSON');
    rl.write('\n2. Reorder Tasks by Source');
    rl.write('\n3. Output ID Changes');
    rl.write('\n4. Convert to task objects');
    rl.write('\n5. Exit\n');

    rl.question('\nWhat would you like to do? ', async (answer) => {
        switch(answer) {
            case '1': convertSheetToJSON(rl, mainScreen); break;
            case '2': reorderTasksBySource(rl, mainScreen); break;
            case '3': outputIdChanges(rl, mainScreen); break;
            case '4': convertTasksToObject(rl, mainScreen); break;
            default: rl.close();
        }
    });
}
