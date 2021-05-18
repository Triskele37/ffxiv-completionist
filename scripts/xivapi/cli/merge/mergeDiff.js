const fs = require("fs");
const logUpdate = require("log-update");

const utils = require("../../utils");

module.exports = function mergeDiffTasks(rl, tasks, next) {
    const totalTasks = tasks.length;
    mergeNextTask();

    // Recursive function that shifts `tasks` until there are none left then calls `next`
    function mergeNextTask() {
        logUpdate.clear();
        console.clear();

        // Continue when `tasks` is exhausted
        if(!tasks.length) {
            next();
            return;
        }

        // Remove and destructure the next task to be reviewed
        const { appPath, appKey, appTask, cacheKey, cacheTask } = tasks.shift();

        // Auto-merge casing diffs
        const stringValue = typeof appTask[appKey] === "string";
        const isCasingDiff = stringValue && appTask[appKey].toLowerCase() === cacheTask[cacheKey].toLowerCase();

        if(isCasingDiff) {
            writeMerge(appPath, appKey, appTask, cacheKey, cacheTask);
            mergeNextTask();
        }
        else displayDeveloperInput(appPath, appKey, appTask, cacheKey, cacheTask);
    }

    function displayDeveloperInput(appPath, appKey, appTask, cacheKey, cacheTask) {
        // Display the progress of all diffs and information about the current diff
        rl.write(`Diff detected ${totalTasks - tasks.length}/${totalTasks}: ${appPath}\n`);
        rl.write(`Key: ${appKey}\n\n`);
        rl.write("App Task:\n");
        console.log(appTask);
        rl.write("\nCache Task:\n");
        console.log(cacheTask);

        // Developer input to merge the cached value into the app
        rl.question('\nUpdate App with cached value?\n1: Yes\n2: No\n3: Merge All\n', (answer) => {
            switch(answer) {
                case "1":
                    writeMerge(appPath, appTask, appKey, cacheTask, cacheKey);
                    rl.question(`\n\n${appPath} updated`, mergeNextTask);
                    break;
                case "3":
                    // Merge the current task first when "All" was selected
                    writeMerge(appPath, appTask, appKey, cacheTask, cacheKey);
                    // Continue merging the rest off the tasks
                    mergeAllTasks();
                    break;
                default:
                    mergeNextTask();
            }
        });
    }

    // Merges the entire `tasks` array without developer input
    function mergeAllTasks() {
        let totalMerged = 1;
        while(tasks.length) {
            const { appPath, appKey, appTask, cacheKey, cacheTask } = tasks.shift();
            writeMerge(appPath, appTask, appKey, cacheTask, cacheKey);
            totalMerged++;
        }

        rl.question(`\n\n${totalMerged} tasks updated`, mergeNextTask);
    }
};

// Write value changes back to the app
function writeMerge(appPath, appTask, appKey, cacheTask, cacheKey) {
    const json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
    json.tasks.forEach((task) => {
        if(task.id === appTask.id) task[appKey] = utils.safeTrim(cacheTask[cacheKey]);
    });
    fs.writeFileSync(`${appPath}`, JSON.stringify(json, null, 4));
}
