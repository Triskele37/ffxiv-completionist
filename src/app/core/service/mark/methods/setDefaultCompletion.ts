import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { MarkServiceContext } from '../types';

export function setDefaultCompletion(
    this: MarkServiceContext,
    group: DataGroup,
    task: Task
): void {
    if(task.defaultCompletion) {
        // default explicitly on task, use task's
        this.setCompletion(task, task.defaultCompletion);
    }
    else {
        // default not explicitly on task, use parent group's
        this.setCompletion(task, group.defaultCompletion);
    }
}
