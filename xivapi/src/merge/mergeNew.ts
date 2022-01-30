import readline from 'readline';

import { Content } from '../domain/Content';
import { RESOURCES, skipClears } from '../constants';

const MenuQuestion = `\nAdd task/s to app?
1: Yes
2: No
3: Add all in same group
4: Add all
`;

export function mergeNewTasks(rl: readline.Interface, content: Content, tasks, next): void {
    const totalTasks = tasks.length;
    mergeNextTasks();

    // Recursive function that shifts `tasks` until there are none left then calls `next`
    function mergeNextTasks() {
        if(!skipClears) console.clear();

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
        rl.question(MenuQuestion, (answer) => {
            switch(answer) {
                case '1':
                    tasksToReview.forEach((changeData, i) => {
                        changeData.writeNewData();
                        const message = `\ntask added to ${changeData.appPath}`;

                        if(i !== tasksToReview.length - 1) {
                            console.log(message);
                        }
                        else {
                            rl.question(message, mergeNextTasks);
                        }
                    });
                    break;
                case '3':
                    // Put the current reviews back into tasks for mergeAll
                    tasks.unshift(...tasksToReview);

                    // Continue merging the rest of the tasks matching the current's path
                    let curPath = tasks[0].appPath;
                    curPath = curPath.replace(RESOURCES + '/', ''); // Remove the resources segments
                    curPath = curPath.substr(curPath.indexOf('/') + 1); // Remove lang

                    mergeAllTasks(curPath);
                    break;
                case '4':
                    // Put the current reviews back into tasks for mergeAll
                    tasks.unshift(...tasksToReview);

                    // Continue merging the rest of the tasks
                    mergeAllTasks();
                    break;
                default:
                    mergeNextTasks();
            }
        });
    }

    // Remove the next new task/2 to be reviewed
    function getNextTasks(): any[] {
        const tasksToReview = [tasks.shift()];

        // Combine any task matching ID into this review (localization or dupes)
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
    function mergeAllTasks(mergePath?: string): void {
        let totalAdded = 1;

        while(tasks.length && (!mergePath || tasks[0].appPath.includes(mergePath))) {
            tasks.shift().writeNewData();
            totalAdded++;
        }

        rl.question(`\n\n${totalAdded} tasks added`, mergeNextTasks);
    }
}
