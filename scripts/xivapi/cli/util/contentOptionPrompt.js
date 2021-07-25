const cacheAPI = require("../cache");
const mergeAPI = require("../merge");

const Content = require("../../content");

module.exports = function contentOptionPrompt(rl, returnToMain) {
    const crumbs = [Content];
    let cur, curKeys;

    diveContent();

    // Recursive function to decide what content to interact with
    function diveContent() {
        cur = crumbs[crumbs.length - 1];
        curKeys = Object.keys(cur);

        console.clear();
        writeOptions();
        contentPrompt();
    }

    // Writes current depth of options to screen
    function writeOptions() {
        rl.write("Content Options:\n");

        curKeys.forEach((key, i) => {
            const ascii = !!cur[key].config ? "" : " >";

            rl.write(`\n${i + 1}. ${key}${ascii}`);
        });

        rl.write(`\n${curKeys.length + 1}. Back\n`);
    }

    // Prompt for which content to execute on
    function contentPrompt() {
        rl.question('\nChoice: ', (answer) => {
            const content = cur[curKeys[parseInt(answer) - 1]];

            if(!content) goBack();
            else if(content.config) actionPrompt(content);
            else goForward(content);
        });
    }

    // Go back to the previous depth or throw back to main
    function goBack() {
        crumbs.pop();

        if(crumbs.length) diveContent();
        else returnToMain();
    }

    // Go forward to the next depth
    function goForward(content) {
        crumbs.push(content);
        diveContent();
    }

    // Prompt for which action to execute on the chosen content
    function actionPrompt(content) {
        console.clear();

        rl.write(`Perform which action on (${content.config.API_ENDPOINT})?\n\n`);
        rl.write("1. Add new content to cache\n");
        rl.write(`2. Retry failed content (${content.config.FAILED_IDS.length})\n`);
        rl.write("3. Create fresh cache\n");
        rl.write("4. Merge cache to App\n");
        rl.write("5. Back\n");

        rl.question("\nChoice: ", (answer) => {
            console.clear();

            switch(answer) {
                case "1": cacheAPI(content, "new", returnToMain); break;
                case "2": cacheAPI(content, "fail", returnToMain); break;
                case "3": cacheAPI(content, "full", returnToMain); break;
                case "4": mergeAPI(content, rl, returnToMain); break;
                default: diveContent();
            }
        });
    }
};
