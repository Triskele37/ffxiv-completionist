import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { MarkService } from '../mark.service';

export function setDefaultCompletion(service: MarkService) {
    return (
        group: DataGroup,
        task: Task,
    ): void => {
        if(task.defaultCompletion) {
            // default explicitly on task, use task's
            service.setCompletion(task, task.defaultCompletion);
        }
        else if(group.defaultCompletion) {
            // default not explicitly on task, use parent group's
            service.setCompletion(task, group.defaultCompletion);
        }
        else {
            console.error('No default completion:', task);
        }
    };
}
