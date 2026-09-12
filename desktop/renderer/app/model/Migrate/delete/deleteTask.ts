import type { PlayerSave } from '@common/PlayerSave';

import type { ID } from '../types';
import { getDeepProperty } from '../retrieve/getDeepProperty';
import { deleteTaskMeta } from './deleteMeta';

/**
 * Delete a task an all meta associated with it
 * */
export function deleteTask(
    save: PlayerSave,
    groupPath: string,
    taskId: ID,
): void {
    const strId = taskId.toString();

    const group = getDeepProperty(save, groupPath);
    if(group) {
        delete group[strId];
    }

    const fullStorageKey = `${groupPath}.${strId}`;
    deleteTaskMeta(save, fullStorageKey);
}

/**
 * Delete all tasks in a range and all meta associated with each
 * */
export function deleteTasks(
    save: PlayerSave,
    groupPath: string,
    taskIdsOrRange: ID[] | { start: ID, end: ID },
): void {
    const group = getDeepProperty(save, groupPath);
    if(!group) return;

    if(Array.isArray(taskIdsOrRange)) {
        for(const taskId of taskIdsOrRange) {
            deleteTask(save, groupPath, taskId);
        }
    }
    else {
        const { start, end } = taskIdsOrRange;
        const startInt = typeof start === 'string' ? parseInt(start, 10) : start;
        const endInt = typeof end === 'string' ? parseInt(end, 10) : end;

        for(let i = startInt; i <= endInt; i++) {
            deleteTask(save, groupPath, i.toString());
        }
    }
}
