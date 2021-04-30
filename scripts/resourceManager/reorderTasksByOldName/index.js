const fs = require("fs");
const constants = require("../constants");

const BASE_DIR = `${constants.BASE_DIR}/reorderTasksByOldName`;
module.exports = function convertSheetToJSON(rl, back) {
    const oldGroup = JSON.parse(fs.readFileSync(`${BASE_DIR}/oldGroup.json`, "utf8"));
    const newGroup = JSON.parse(fs.readFileSync(`${BASE_DIR}/newGroup.json`, "utf8"));

    console.clear();
    rl.write(`Reordering tasks for group: ${newGroup.groupName}\n\n`);

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
    rl.write(`${missingTasksNames.length} tasks missing from new group\n`);
    if(missingTasksNames.length) {
        missingTasksNames.forEach((n) => rl.write(`"${n}"\n`));
        rl.write("\nhalting process\n");
        done();
        return;
    }

    // Check for tasks missing in the old group
    const tasksNotInOld = newGroup.tasks.filter((t) => {
        return !oldTaskNames.find((name) => t.name.toLowerCase() === name.toLowerCase())
    });
    rl.write(`\n${tasksNotInOld.length} tasks in new group that are not in old group\n`);
    if(tasksNotInOld.length) rl.write(tasksNotInOld.map((t) => t.id).join(', '));

    // Write the new task order to the newGroup.json file
    newGroup.tasks = [...newTasks];
    fs.writeFileSync(`${BASE_DIR}/newGroup.json`, JSON.stringify(newGroup, null, 4));

    // Write the extra tasks to a separate file
    fs.writeFileSync(`${BASE_DIR}/extraTasks.json`, JSON.stringify({
        ids: tasksNotInOld.map((t) => t.id),
        tasks: tasksNotInOld
    }, null, 4));

    done();

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', () => back());
    }
};