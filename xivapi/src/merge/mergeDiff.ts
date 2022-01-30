import logUpdate from 'log-update';

import { skipClears } from '../constants';

const MenuQuestion = `\nUpdate App with cached value?
1: Yes
2: No
3: Auto-merge all diffs with this property
4: Merge all
5: Skip all
`;

export function mergeDiffTasks(rl, content, tasks, next) {
    const totalTasks = tasks.length;
    const autoMergeProps = [];

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
        const nextReview = tasks.shift();

        if(autoMergeProps.includes(nextReview.appKey)) {
            nextReview.writeDiffMerge();
            mergeNextTask();
        }
        else {
            displayDeveloperInput(nextReview);
        }
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
        rl.question(MenuQuestion, (answer) => {
            switch(answer) {
                case '1':
                    changeData.writeDiffMerge();
                    rl.question(`\n\n${changeData.appPath} updated`, mergeNextTask);
                    break;
                case '3':
                    changeData.writeDiffMerge();
                    autoMergeProps.push(changeData.appKey);

                    let message = `\n\n${changeData.appPath} updated`;
                    message += `\nAll further "${changeData.appKey}" diffs will be auto-merged`;

                    rl.question(message, mergeNextTask);
                    break;
                case '4':
                    // Merge the current task first when "All" was selected
                    changeData.writeDiffMerge();
                    // Continue merging the rest off the tasks
                    mergeAllTasks();
                    break;
                case '5':
                    while(tasks.length) tasks.pop();
                    mergeNextTask();
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
