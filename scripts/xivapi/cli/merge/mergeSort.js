const fs = require("fs");

module.exports = function mergeSortTasks(rl, tasks, next) {
    const totalTasks = tasks.length;
    mergeNextTask();

    // Recursive function that shifts `tasks` until there are none left then calls `next`
    function mergeNextTask() {
        console.clear();

        // Continue when `tasks` is exhausted
        if(!tasks.length) {
            next();
            return;
        }

        // Get the next task/s to review
        const tasksToReview = getNextTasks();

        // Display the progress of all sorts and information about the current one
        rl.write(`Task order diff detected ${totalTasks - tasks.length}/${totalTasks}:\n`);
        tasksToReview.forEach((t) => rl.write(`${t.appPath}\n`));
        rl.write(`\nTask: ${tasksToReview[0].appTask.name}\n`);
        rl.write(`Order: ${tasksToReview[0].appIndex} -> ${tasksToReview[0].cacheIndex}\n`);

        // Developer input to merge the task order change into the app
        rl.question('\nUpdate Task sort order?\n1: Yes\n2: No\n3: Sort All\n', (answer) => {
            switch(answer) {
                case "1":
                    tasksToReview.forEach((t) => {
                        writeMerge(t.appPath, t.appTask, t.cacheIndex);
                        rl.question(`\n\n${t.appTask.name} sorted`, mergeNextTask);
                    });
                    break;
                case "3":
                    // Merge the current task/s first when "All" was selected
                    tasksToReview.forEach((t) => writeMerge(t.appPath, t.appTask, t.cacheIndex));
                    // Continue merging the rest off the tasks
                    mergeAllTasks();
                    break;
                default:
                    mergeNextTask();
            }
        });
    }

    // Remove the next task to be reviewed along with other instances of it in different languages
    function getNextTasks() {
        const tasksToReview = [tasks.shift()];

        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].appTask.id === tasksToReview[0].appTask.id) {
                tasksToReview.push(tasks[i]);
                tasks.splice(i, 1);
                i--;
            }
        }

        return tasksToReview;
    }

    // Merges the entire `tasks` array without developer input
    function mergeAllTasks() {
        let totalSorted = 1;
        while(tasks.length) {
            const { appPath, appTask, cacheIndex } = tasks.shift();
            writeMerge(appPath, appTask, cacheIndex);
            totalSorted++;
        }

        rl.question(`\n\n${totalSorted} tasks sorted`, mergeNextTask);
    }
};

// Write order changes back to the app
function writeMerge(appPath, appTask, cacheIndex) {
    const json = JSON.parse(fs.readFileSync(appPath, 'utf8'));
    const appIndex = json.tasks.findIndex((t) => t.id === appTask.id);

    // Remove from current index
    const jsonTask = json.tasks.splice(appIndex, 1)[0];

    // Add into desired index
    json.tasks.splice(cacheIndex, 0, jsonTask);

    // Write change
    fs.writeFileSync(`${appPath}`, JSON.stringify(json, null, 4));
}
