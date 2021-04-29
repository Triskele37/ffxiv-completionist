const cacheAPI = require('./cacheAPI');
const contentOptionPrompt = require("../util/contentOptionPrompt");
const Content = require("../../content");

module.exports = function cacheCLI(rl, back) {
    contentOptionPrompt(rl, Content, "Cache which content from xivapi?");

    // Cache selected option or go back to main
    rl.question('\nWhat would you like to do? ', (answer) => {
        console.clear();

        if(Content[answer]) cacheAPI(Content[answer], done);
        else back();
    });

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', back);
    }
};
