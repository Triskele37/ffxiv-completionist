const compareAPI = require('./compareAPI');
const contentOptionPrompt = require("../util/contentOptionPrompt");
const Content = require("../../content");

module.exports = function compareCLI(rl, back) {
    contentOptionPrompt(rl, Content, "Compare which cached content to resources?");

    rl.question('\nWhat would you like to do? ', (answer) => {
        console.clear();

        const selectedContent = Content[answer];
        if(selectedContent) {
            console.log(selectedContent.content + " selected");
            done();
            // compareAPI(selectedContent.config, selectedContent.build, done);
        }
        else back();
    });

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', back);
    }
};
