const Content = require("../../content");

const removeExcluded = require("./removeExcluded");
const reviewErrors = require("./reviewErrors");

module.exports = function cleanAPI(rl, back) {
    console.clear();

    Content.forEach((content) => {
        rl.write(`Cleaning ${content.content}\n\n`);

        removeExcluded(rl, content);
        reviewErrors(rl, content);
    });

    done();

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', back);
    }
};
