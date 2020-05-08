// const buildAchievement = require('./Achievement');
// const buildENpcResident = require('./ENpcResident');
// const buildItem = require('./Item');
// const buildQuest = require('./Quest');
// const buildRecipe = require('./Recipe');

module.exports = function buildCLI(rl, back) {
    console.clear();
    rl.write('Build which API to static?\n');
    // rl.write('\n1. Achievement');
    // rl.write('\n2. ENpcResident');
    // rl.write('\n3. Item');
    // rl.write('\n4. Quest');
    // rl.write('\n5. Recipe');
    rl.write('\n6. Back\n');

    rl.question('What would you like to do? ', async (answer) => {
        console.clear();

        switch(answer) {
            // case '1': await buildAchievement(done); break;
            // case '2': await buildENpcResident(done); break;
            // case '3': await buildItem(done); break;
            // case '4': await buildQuest(done); break;
            // case '5': await buildRecipe(done); break;
            default: back();
        }
    });

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', back);
    }
};
