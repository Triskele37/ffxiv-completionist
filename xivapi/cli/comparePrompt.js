const compareAPI = require('./util/compareAPI');

const { AchievementConfig, AchievementBuild } = require('./Achievement');
// const { ENpcResidentConfig, ENpcResidentBuild } = require('./ENpcResident');
// const { ItemConfig, ItemBuild } = require('./Item');
const { QuestConfig, QuestBuild } = require('./Quest');
// const { RecipeConfig, RecipeBuild } = require('./Recipe');
// const { RecipeNotebookListConfig, RecipeNotebookListBuild } = require('./RecipeNotebookList');

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
            case '1': compareAPI(AchievementConfig, AchievementBuild); break;
            // case '2': compareAPI(ENpcResidentConfig, ENpcResidentBuild); break;
            // case '3': compareAPI(ItemConfig, ItemBuild); break;
            case '4': compareAPI(QuestConfig, QuestBuild);break;
            // case '5': compareAPI(RecipeConfig, RecipeBuild); break;
            default: back();
        }

        done();
    });

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', back);
    }
};
