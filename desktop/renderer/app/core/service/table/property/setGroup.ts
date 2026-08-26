import type { TableServiceContext } from '../types';

import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

/**
 * Hook for any additional processing when updating group
 * */
export function setGroup(
    this: TableServiceContext,
    group: DataGroup,
): void {
    this.group.set(group);

    if(group.showAllTasks) {
        this.originalTasks = diveForTasks(group);
    }
    else {
        this.originalTasks = group.tasks;
    }

    this.order.originalOrder = group.tasks.map((t) => t.id);

    this.property.setHasNumericColumns();
    this.filter.updateFilteredTasks();
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
}
