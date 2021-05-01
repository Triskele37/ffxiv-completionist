const fs = require("fs");
const constants = require("../constants");

const OLD_DIR = `../backup resources/en/crafting/shared`;
const NEW_DIR = "./resources/en/logs/crafting/shared";

module.exports = function reorderTasksByOldName(rl, back) {
    console.clear();
    rl.write(`Reordering tasks for groups in: ${NEW_DIR}\n\n`);

    const filesToReview = [];
    dive(OLD_DIR, NEW_DIR);
    const originalTotal = filesToReview.length;

    reorderNextTasksInNew();

    // Dive and add any files that need review to an array
    function dive(oldPath, newPath) {
        const dirs = fs.readdirSync(oldPath);

        dirs.forEach((stat) => {
            const newOldPath = `${oldPath}/${stat}`;
            const newNewPath = `${newPath}/${stat}`;

            if(fs.lstatSync(newOldPath).isDirectory()) dive(newOldPath, newNewPath);
            else {
                console.log(newOldPath);
                filesToReview.push({ newOldPath, newNewPath });
            }
        });
    }

    function reorderNextTasksInNew() {
        const { newOldPath, newNewPath } = filesToReview.shift();

        const oldGroup = JSON.parse(fs.readFileSync(newOldPath, "utf8"));
        const newGroup = JSON.parse(fs.readFileSync(newNewPath, "utf8"));

        // Bail if there are no tasks
        if(!oldGroup.tasks) {
            if(filesToReview.length) reorderNextTasksInNew();
            else done();
            return;
        }

        // Output
        console.clear();
        rl.write(`Reviewing group (${originalTotal - filesToReview.length}/${originalTotal}): ${newOldPath}\n\n`);

        // Get the order of tasks using the old group
        const oldTaskNames = [];
        oldGroup.tasks.forEach((t) => oldTaskNames.push(t.name));
        rl.write(`${oldTaskNames.length} old tasks detected\n\n`);

        // Create the new task order
        const newTasks = [];
        const missingTasksNames = [];
        oldTaskNames.forEach((name) => {
            const newTask = newGroup.tasks.find((t) => t.name.toLowerCase() === name.toLowerCase());
            if(newTask) newTasks.push(newTask);
            else missingTasksNames.push(name);
        });

        // Log tasks missing from the new group
        let tasksNotInOld = [];

        rl.write(`${missingTasksNames.length} tasks missing from new group\n`);
        if(missingTasksNames.length) {
            missingTasksNames.forEach((n) => rl.write(`"${n}"\n`));
            rl.write("\nSkipping reorder\n");
        }
        else {
            // Check for tasks missing in the old group
            tasksNotInOld = newGroup.tasks.filter((t) => {
                return !oldTaskNames.find((name) => t.name.toLowerCase() === name.toLowerCase())
            });
            rl.write(`\n${tasksNotInOld.length} tasks in new group that are not in old group\n`);
            if(tasksNotInOld.length) {
                rl.write(tasksNotInOld.map((t) => t.id).join(', ') + '\n');

                // Write the extra tasks to a separate file
                const extraTasksPath = `${constants.BASE_DIR}/reorderTasksByOldName/extraTasks.json`;
                const extraTasks = JSON.parse(fs.readFileSync(extraTasksPath, "utf8"));
                extraTasks.push({
                    oldPath: newOldPath,
                    newPath: newNewPath,
                    ids: tasksNotInOld.map((t) => t.id),
                    tasks: tasksNotInOld
                });

                fs.writeFileSync(extraTasksPath, JSON.stringify(extraTasks, null, 4));
            }

            // Write the new task order to the newGroup.json file
            newGroup.tasks = [...newTasks];
            fs.writeFileSync(newNewPath, JSON.stringify(newGroup, null, 4));
        }

        if(filesToReview.length) {
            // Only pause execution when review is needed
            if(missingTasksNames.length || tasksNotInOld.length) {
                rl.question("\npress any key to continue...", reorderNextTasksInNew);
            }
            else {
                reorderNextTasksInNew();
            }
        }
        else {
            // No more to review
            done();
        }
    }

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', () => back());
    }
};
