const Content = require("../../content");

const removeExcluded = require("./removeExcluded");
const reviewErrors = require("./reviewErrors");
const splitCommonKeys = require("./splitCommonKeys");

const TAB = "    ";
module.exports = function cleanAPI(rl, back) {
    console.clear();

    const crumbs = [Content];
    diveContent(0);

    function diveContent(depth) {
        const cur = crumbs[crumbs.length - 1];
        const curKeys = Object.keys(cur);

        curKeys.forEach((key) => {
            const indentation = new Array(depth).fill(TAB).join("");
            const content = cur[key];

            if(content.config) {
                rl.write(`${indentation}Cleaning ${key}\n`);

                removeExcluded(rl, content, indentation + TAB);
                reviewErrors(rl, content, indentation + TAB);
                splitCommonKeys(rl, content, indentation + TAB);
            }
            else {
                rl.write(`${indentation}(${key})\n`);
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
