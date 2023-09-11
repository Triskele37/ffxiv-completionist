import { createTask } from '@model/Task/createTask';
import { setCompletion } from '@model/Task/completion/setCompletion';

import { DataGroup } from '../';

type JsonTasks = { [key: string]: Record<string, any> };

export function initializeTasks(group: DataGroup, tasks: JsonTasks): DataGroup {
    Object.keys(tasks).forEach((id) => {
        const task = createTask(tasks[id], group);

        if(task.defaultCompletion) {
            // default explicitly on task, use task's
            setCompletion(task, task.defaultCompletion);
        }
        else {
            // default not explicitly on task, use parent group's
            setCompletion(task, group.defaultCompletion);
        }

        group.tasks.push(task);
    });

    return group;
}
