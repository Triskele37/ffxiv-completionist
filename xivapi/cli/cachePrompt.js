const cacheAPI = require('./util/cacheAPI');

const { AchievementConfig, AchievementPath } = require('./Achievement');
const { ENpcResidentConfig, ENpcResidentPath } = require('./ENpcResident');
const { ItemConfig, ItemPath } = require('./Item');
const { QuestConfig, QuestPath } = require('./Quest');
const { RecipeConfig, RecipePath } = require('./Recipe');
const { RecipeNotebookListConfig, RecipeNotebookListPath } = require('./RecipeNotebookList');

module.exports = function cacheCLI(rl, back) {
    console.clear();
    rl.write('Cache which API from xivapi?\n');
    rl.write('\n1. Achievement');
    rl.write('\n2. ENpcResident');
    rl.write('\n3. Item');
    rl.write('\n4. Quest');
    rl.write('\n5. Recipe');
    rl.write('\n6. Back\n');

    rl.question('\nWhat would you like to do? ', (answer) => {
        console.clear();

        switch(answer) {
            case '1': cacheAPI(AchievementConfig, AchievementPath, done); break;
            case '2': cacheAPI(ENpcResidentConfig, ENpcResidentPath, done); break;
            case '3': cacheAPI(ItemConfig, ItemPath, done); break;
            case '4': cacheAPI(QuestConfig, QuestPath, done); break;
            case '5':
                cacheAPI(RecipeConfig, RecipePath, () => {
                    cacheAPI(RecipeNotebookListConfig, RecipeNotebookListPath, done);
                });
                break;
            default: back();
        }
    });

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', back);
    }
};
