const fs = require("fs");

/* Converts every .tasks array in the resources folder
    to an object with ids as keys
*/
module.exports = function reorderTasksBySource(rl, back) {
    console.clear();

    rl.write(`Converting task arrays to objects\n\n`);
    dive('./resources');

    done();

    function dive(path) {
        const dirs = fs.readdirSync(path);

        dirs.forEach((content) => {
            const newPath = `${path}/${content}`;

            if(fs.lstatSync(newPath).isDirectory()) {
                dive(newPath);
            }
            else {
                const file = JSON.parse(fs.readFileSync(newPath, "utf8"));

                if(file.tasks) {
                    if(Array.isArray(file.tasks)) {
                        handleWhenStillArray(newPath, file);
                    }
                    else {
                        handleWhenObject(newPath, file);
                    }
                }
            }
        });
    }

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', () => back());
    }

    function handleWhenStillArray(newPath, file) {
        const tasksObj = {};
        for(const task of file.tasks) {
            tasksObj[`x${task.id}`] = task;
        }
        file.tasks = tasksObj;

        rl.write(`Updating task for: ${newPath}\n`);

        fs.writeFileSync(newPath, JSON.stringify(file, null, 4));
    }

    function handleWhenObject(newPath, file) {
        console.error(`${newPath} is already in object form`);
    }
};
