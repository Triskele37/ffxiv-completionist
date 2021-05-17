const fs = require("fs");

module.exports = function mergeNewTasks(rl, content, tasks, next) {
    const totalTasks = tasks.length;
    mergeNextTasks();

    // Recursive function that shifts `tasks` until there are none left then calls `next`
    function mergeNextTasks() {
        console.clear();

        // Continue when `tasks` is exhausted
        if(!tasks.length) {
            next();
            return;
        }

        // Get the next new task/s to review
        const tasksToReview = getNextTasks();

        // Display the progress of all new tasks and information about the current one
        rl.write(`New Task detected ${totalTasks - tasks.length}/${totalTasks}:\n`);
        tasksToReview.forEach((t) => rl.write(`${t.appPath}\n`));
        console.log(tasksToReview[0].cacheTask);

        // Developer input to merge the new cached task into the app
        rl.question('\nAdd task/s to app?\n1: Yes\n2: No\n3: Add All\n', (answer) => {
            switch(answer) {
                case "1":
                    tasksToReview.forEach((t) => {
                        writeFile(content, t.appPath, t.lang, t.cacheTask, t.cacheIndex);
                        rl.question(`\ntask added to ${t.appPath}`, mergeNextTasks);
                    });
                    break;
                case "3":
                    // Merge the current task/s first when "All" was selected
                    tasksToReview.forEach((t) => writeFile(content, t.appPath, t.lang, t.cacheTask, t.cacheIndex));
                    // Continue merging the rest off the tasks
                    mergeAllTasks();
                    break;
                default:
                    mergeNextTasks();
            }
        });
    }

    // Remove the next new task to be reviewed along with other instances of it in different languages
    function getNextTasks() {
        const tasksToReview = [tasks.shift()];

        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].cacheTask.ID === tasksToReview[0].cacheTask.ID) {
                tasksToReview.push(tasks[i]);
                tasks.splice(i, 1);
                i--;
            }
        }

        return tasksToReview;
    }

    // Merges the entire `tasks` array without developer input
    function mergeAllTasks() {
        let totalAdded = 1;
        while(tasks.length) {
            const { appPath, lang, cacheTask, cacheIndex } = tasks.shift();
            writeFile(content, appPath, lang, cacheTask, cacheIndex);
            totalAdded++;
        }

        rl.question(`\n\n${totalAdded} tasks added`, mergeNextTasks);
    }
};

function writeFile(content, appPath, lang, cacheTask, cacheIndex) {
    let json = {};

    if(fs.existsSync(appPath)) {
        const task = content.mapAppTask(cacheTask, lang);
        json = JSON.parse(fs.readFileSync(appPath, 'utf8'));

        // Attempt to insert the task into the right sort order
        if(json.tasks.length > cacheIndex) json.tasks.splice(cacheIndex, 0, task);
        else json.tasks.push(task);
    }
    else {
        json = {
            groupName: "PLACEHOLDER",
            tasks: [content.mapAppTask(cacheTask, lang)]
        };
    }

    fs.writeFileSync(appPath, JSON.stringify(json, null, 4));
}
