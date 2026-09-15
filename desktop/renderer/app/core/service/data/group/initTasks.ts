import type { DataGroup } from '@model/DataGroup';
import type { JsonTasks } from '@model/JSONResource';

import type { DataService } from '../data-service';

export function initTasks(service: DataService) {
    return (
        group: DataGroup,
        tasks: JsonTasks,
    ): DataGroup => {
        Object.keys(tasks).forEach((id) => {
            const task = service.createTask(tasks[id], group);

            service.addTaskToIndex(task);
            service.svcMark.setDefaultCompletion(group, task);

            group.tasks.push(task);
        });

        return group;
    };
}
