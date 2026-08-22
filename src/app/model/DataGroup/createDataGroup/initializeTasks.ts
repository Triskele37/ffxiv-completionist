import { addTaskToIndex } from '@data/taskIndexes';
import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { createTask } from '@model/Task/createTask';
import { setCompletion } from '@model/Task/completion/setCompletion';

export type JsonTasks = { [key: string]: Record<string, any> };

export function initializeTasks(group: DataGroup, tasks: JsonTasks): DataGroup {
    Object.keys(tasks).forEach((id) => {
        const task = createTask(tasks[id], group);

        addTaskToIndex(task);
        setDefaultCompletion(group, task);

        group.tasks.push(task);
    });

    return group;
}

function setDefaultCompletion(group: DataGroup, task: Task) {
    if(task.defaultCompletion) {
        // default explicitly on task, use task's
        setCompletion(task, task.defaultCompletion);
    }
    else {
        // default not explicitly on task, use parent group's
        setCompletion(task, group.defaultCompletion);
    }
}
