const fs = require("fs");
const constants = require("../constants");

module.exports = function mergeFauxIDs(rl, back) {
    console.clear();

    rl.write(`Merging any task in ${constants.RESOURCE_DIR} with ID of -1:\n\n`);
    dive(constants.RESOURCE_DIR);

    done();

    function dive(path) {
        const dirs = fs.readdirSync(path);

        dirs.forEach((stat) => {
            const fullDir = `${path}/${stat}`;

            if(fs.lstatSync(fullDir).isDirectory()) dive(fullDir);
            else {
                const resource = JSON.parse(fs.readFileSync(fullDir, "utf8"));
                if(resource.tasks && resource.tasks.length) searchForFaux(fullDir, resource);
            }
        });
    }

    function searchForFaux(path, resource) {
        let mergesFound = 0;

        for(let i = 0; i < resource.tasks.length; i++) {
            const task = resource.tasks[i];

            if(task.ID === -1) {
                const match = resource.tasks.findIndex((t) => t.ID !== task.ID && t.Name === task.Name);

                if(match !== -1) {
                    const matchTask = resource.tasks.splice(match, 1);
                    mergesFound++;

                    delete task.ID;
                    resource.tasks[i] = { ...task, ...matchTask };

                    // Adjust i if match was found before the faux task
                    if(match < i) i--;
                }
            }
        }

        if(mergesFound > 0) {
            rl.write(`${mergesFound} tasks merged: ${path}\n`);
            fs.writeFileSync(path, JSON.stringify(resource, null, 4));
        }
    }

    function done() {
        rl.write('\n\n');
        rl.question('Completed, press any key to continue...', () => back());
    }
};
