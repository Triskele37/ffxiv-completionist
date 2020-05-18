const compareAchievements = require('./Achievement/compare');
// const { ENpcResidentConfig, ENpcResidentPath } = require('./ENpcResident/compare');
// const { ItemConfig, ItemPath } = require('./Item/compare');
// const { QuestConfig, QuestPath } = require('./Quest/compare');
// const { RecipeConfig, RecipePath } = require('./Recipe/compare');
// const { RecipeNotebookListConfig, RecipeNotebookListPath } = require('./RecipeNotebookList/compare');

module.exports = function compareCLI(rl, back) {
    console.clear();
    rl.write('Compare which API from xivapi?\n');
    rl.write('\n1. Achievement');
    rl.write('\n2. ENpcResident');
    rl.write('\n3. Item');
    rl.write('\n4. Quest');
    rl.write('\n5. Recipe');
    rl.write('\n6. Back\n');

    rl.question('\nWhat would you like to do? ', (answer) => {
        console.clear();

        switch(answer) {
            case '1': compareAchievements(done); break;
            case '2': break;
            case '3': break;
            case '4': break;
            case '5': break;
            default: back();
        }
    });

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', back);
    }
};
