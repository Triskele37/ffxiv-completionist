import { addTaskToIndex } from '@data/taskIndexes';
import { DataGroup } from '@model/DataGroup';
import { JsonTasks } from '@model/JSONResource';

import { DataServiceContext } from '../types';

export function initTasks(
    this: DataServiceContext,
    group: DataGroup,
    tasks: JsonTasks,
): DataGroup {
    Object.keys(tasks).forEach((id) => {
        const task = this.task.createTask(tasks[id], group);

        addTaskToIndex(task);
        this.svcMark.setDefaultCompletion(group, task);

        group.tasks.push(task);
    });

    return group;
}
