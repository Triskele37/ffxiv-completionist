import type { TableServiceContext } from '../types';

import type { Task } from '@model/Task';

/**
 * Hook for any additional processing when updating tasks
 * */
export function setTasks(
    this: TableServiceContext,
    tasks: Task[],
): void {
    this.originalTasks = tasks;

    this.filter.updateFilteredTasks();
}
