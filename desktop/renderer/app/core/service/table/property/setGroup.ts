import type { TableService } from '../table.service';

import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

/**
 * Hook for any additional processing when updating group
 * */
export function setGroup(service: TableService) {
    return (
        group: DataGroup,
    ): void => {
        service.group.set(group);

        if(group.showAllTasks) {
            service.originalTasks = diveForTasks(group);
        }
        else {
            service.originalTasks = group.tasks;
        }

        service.originalOrder = service.originalTasks.map((t) => t.fullStorageKey);

        service.setHasNumericColumns();
        service.updateFilteredTasks();
    }

// Return a list of every task nested under the given group
    function diveForTasks(group: DataGroup): Task[] {
        // add current group's tasks
        const tasks: Task[] = [...group.tasks];

        // dive for more child tasks
        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;
            tasks.push(...diveForTasks(subGroup));
        });

        return tasks;
    };
}
