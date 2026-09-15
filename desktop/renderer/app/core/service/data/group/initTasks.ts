import type { DataGroup } from '@model/DataGroup';
import type { JsonTasks } from '@model/JSONResource';

import type { DataService } from '../data-service';
import { addTaskToIndex } from '../_index/methods';

export function initTasks(service: DataService) {
    return (
        group: DataGroup,
        tasks: JsonTasks,
    ): DataGroup => {
        Object.keys(tasks).forEach((id) => {
            const task = service.createTask(tasks[id], group);

            addTaskToIndex(task);
            service.svcMark.setDefaultCompletion(group, task);

            group.tasks.push(task);
        });

        return group;
    };
}
