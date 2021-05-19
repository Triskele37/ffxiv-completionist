const Content = require("../../content");

const removeExcluded = require("./removeExcluded");
const reviewErrors = require("./reviewErrors");

module.exports = function cleanAPI(rl, back) {
    console.clear();

    const crumbs = [Content];
    diveContent(0);

    function diveContent(depth) {
        const cur = crumbs[crumbs.length - 1];
        const curKeys = Object.keys(cur);

        curKeys.forEach((key) => {
            const tabs = new Array(depth).fill("    ").join("");
            const content = cur[key];

            if(content.config) {
                rl.write(`${tabs}Cleaning ${key}\n`);

                removeExcluded(rl, content);
                reviewErrors(rl, content);
            }
            else {
                rl.write(`${tabs}(${key})\n`);
                crumbs.push(content);
                diveContent(depth + 1);
            }
        });
    }

    done();

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', back);
    }
};
