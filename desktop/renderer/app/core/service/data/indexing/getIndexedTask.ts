import type { Task } from '@model/Task';

import type { DataServiceContext } from '../types';
import { INDEX } from './taskIndexes';

/**
 * Attempt to retrieve a task from INDEX
 */
export function getIndexedTask(
    this: DataServiceContext,
    indexKey: string,
    taskId: number | string
): Task | undefined {
    const id = typeof taskId === 'number' ? taskId : parseInt(taskId);
    return isNaN(id) ? undefined : INDEX.get(indexKey)?.map.get(id);
}
