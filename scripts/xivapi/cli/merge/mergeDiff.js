const logUpdate = require("log-update");

const skipConsoleClears = require("../../constants").skipClears;

module.exports = function mergeDiffTasks(rl, content, tasks, next) {
    const totalTasks = tasks.length;
    mergeNextTask();

    // Recursive function that shifts `tasks` until there are none left then calls `next`
    function mergeNextTask() {
        if(!skipConsoleClears) {
            logUpdate.clear();
            console.clear();
        }

        // Continue when `tasks` is exhausted
        if(!tasks.length) {
            next();
            return;
        }

        // Remove the next task to be reviewed
        const changeData = tasks.shift();

        // Auto-merge casing diffs
        if(typeof changeData.appTask[changeData.appKey] === "string") {
            const appLower = changeData.appTask[changeData.appKey].toLowerCase();
            const cacheLower = changeData.cacheTask[changeData.cacheKey].toLowerCase();

            if(appLower === cacheLower) {
                changeData.writeDiffMerge();
                mergeNextTask();
            }
            else displayDeveloperInput(changeData);
        }
        else displayDeveloperInput(changeData);
    }

    function displayDeveloperInput(changeData) {
        // Display the progress of all diffs and information about the current diff
        rl.write(`Diff detected ${totalTasks - tasks.length}/${totalTasks}: ${changeData.appPath}\n`);
        rl.write(`Key: ${changeData.appKey}\n\n`);
        rl.write(`  App: ${changeData.appTask[changeData.appKey]}\n`);
        rl.write(`Cache: ${changeData.cacheTask[changeData.cacheKey]}\n\n`);

        rl.write("App Task:\n");
        console.log(changeData.appTask);
        rl.write("\nCache Task:\n");
        console.log(changeData.cacheTask);

        // Developer input to merge the cached value into the app
        rl.question('\nUpdate App with cached value?\n1: Yes\n2: No\n3: Merge All\n', (answer) => {
            switch(answer) {
                case "1":
                    changeData.writeDiffMerge();
                    rl.question(`\n\n${changeData.appPath} updated`, mergeNextTask);
                    break;
                case "3":
                    // Merge the current task first when "All" was selected
                    changeData.writeDiffMerge();
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
            tasks.shift().writeDiffMerge();
            totalMerged++;
        }

        rl.question(`\n\n${totalMerged} tasks updated`, mergeNextTask);
    }
};
