import type { TableServiceContext } from '../types';

import { Task } from '@model/Task';

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
