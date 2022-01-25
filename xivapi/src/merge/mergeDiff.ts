import logUpdate from 'log-update';

import { skipClears } from '../constants';

export function mergeDiffTasks(rl, content, tasks, next) {
    const totalTasks = tasks.length;
    mergeNextTask(true);

    // Recursive function that shifts `tasks` until there are none left then calls `next`
    function mergeNextTask(first?: boolean) {
        if(!skipClears && !first) {
            logUpdate.clear();
            console.clear();
        }

        // Continue when `tasks` is exhausted
        if(!tasks.length) {
            next();
            return;
        }

        // Review the next task by removing it from the list
        displayDeveloperInput(tasks.shift());
    }

    function displayDeveloperInput(changeData) {
        // Display the progress of all diffs and information about the current diff
        rl.write(`Diff detected ${totalTasks - tasks.length}/${totalTasks}: ${changeData.appPath}\n`);
        rl.write(`Key: ${changeData.appKey}\n\n`);
        rl.write(`  App: ${changeData.appTask[changeData.appKey]}\n\n`);
        rl.write(`Cache: ${changeData.cacheTask[changeData.cacheKey]}\n\n`);

        rl.write('App Task:\n');
        console.log(changeData.appTask);
        rl.write('\nCache Task:\n');
        console.log(changeData.cacheTask);

        // Developer input to merge the cached value into the app
        rl.question('\nUpdate App with cached value?\n1: Yes\n2: No\n3: Merge All\n', (answer) => {
            switch(answer) {
                case '1':
                    changeData.writeDiffMerge();
                    rl.question(`\n\n${changeData.appPath} updated`, mergeNextTask);
                    break;
                case '3':
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
}
