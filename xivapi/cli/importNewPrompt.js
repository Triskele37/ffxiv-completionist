const importNewAPI = require('./util/importNewAPI');

const { AchievementConfig, AchievementBuild } = require('./Achievement');
// const { ENpcResidentConfig, ENpcResidentBuild } = require('./ENpcResident');
// const { ItemConfig, ItemBuild } = require('./Item');
const { QuestConfig, QuestBuild } = require('./Quest');
// const { RecipeConfig, RecipeBuild } = require('./Recipe');
// const { RecipeNotebookListConfig, RecipeNotebookListBuild } = require('./RecipeNotebookList');

module.exports = function updateCLI(rl, back) {
    console.clear();
    rl.write('Import new items from which static with API data?\n');
    rl.write('\n1. Achievement');
    rl.write('\n2. ENpcResident');
    rl.write('\n3. Item');
    rl.write('\n4. Quest');
    rl.write('\n5. Recipe');
    rl.write('\n6. Back\n');

    rl.question('\nWhat would you like to do? ', (answer) => {
        console.clear();

        switch(answer) {
            case '1': importNewAPI(AchievementConfig, AchievementBuild); break;
            // case '2': importNewAPI(ENpcResidentConfig, ENpcResidentBuild); break;
            // case '3': importNewAPI(ItemConfig, ItemBuild); break;
            case '4': importNewAPI(QuestConfig, QuestBuild);break;
            // case '5': importNewAPI(RecipeConfig, RecipeBuild); break;
            default: back();
        }

        done();
    });

    function done() {
        rl.write('\n\n');
        rl.question('Import Completed, press any key to continue...', back);
    }
};
