import type { Task } from '@model/Task';

import type { DataServiceContext } from '../types';
import { INDEX, LOOKUP } from './taskIndexes';

/**
 * Attempt to add a task INDEX
 */
export function addTaskToIndex(
    this: DataServiceContext,
    task: Task,
): void {
    const baseKey = Object.keys(LOOKUP).find((base) => task.fullStorageKey.startsWith(base));
    if(!baseKey) return;

    const shorthand = LOOKUP[baseKey];

    if(shorthand) {
        const { exclude, map } = INDEX.get(shorthand) ?? {};
        if(exclude && exclude.some((e) => task.fullStorageKey.includes(e))) return;
        map?.set(task.id, task);
    }
}
