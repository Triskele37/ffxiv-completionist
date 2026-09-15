import type { Task } from '@model/Task';

import { INDEX, LOOKUP } from './data';

export function addTaskToIndex(task: Task): void {
    const baseKey = Object.keys(LOOKUP).find((base) => task.fullStorageKey.startsWith(base));
    if(!baseKey) return;

    const shorthand = LOOKUP[baseKey];

    if(shorthand) {
        const { exclude, map } = INDEX.get(shorthand) ?? {};
        if(exclude && exclude.some((e) => task.fullStorageKey.includes(e))) return;
        map?.set(task.id, task);
    }
}

export function getIndexedTask(indexKey: string, taskId: number | string): Task | undefined {
    const id = typeof taskId === 'number' ? taskId : parseInt(taskId);
    return isNaN(id) ? undefined : INDEX.get(indexKey)?.map.get(id);
}
