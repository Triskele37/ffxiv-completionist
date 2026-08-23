import { INDEX } from '@data/taskIndexes';
import type { Task } from '@model/Task';

/**
 * Attempt to retrieve a task from INDEX
 */
export function getIndexedTask(
    indexKey: string,
    taskId: number | string
): Task | undefined {
    const id = typeof taskId === 'number' ? taskId : parseInt(taskId);
    return isNaN(id) ? undefined : INDEX.get(indexKey)?.map.get(id);
}
