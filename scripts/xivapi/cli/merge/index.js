const mergeAPI = require('./mergeAPI');
const contentOptionPrompt = require("../util/contentOptionPrompt");
const Content = require("../../content");

module.exports = function mergeCLI(rl, back) {
    contentOptionPrompt(rl, Content, "Merge which cached content into resources?");

    rl.question('\nWhat would you like to do? ', (answer) => {
        console.clear();

        if(Content[answer]) mergeAPI(Content[answer], rl, done);
        else back();
    });

    function done() {
        rl.write('\n\n');
        rl.question('Merge Completed, press any key to continue...', back);
    }
};
