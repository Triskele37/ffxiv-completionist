import type { PlayerSave } from '@common/PlayerSave';
import type { ID, Range } from '@common/Migration';

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
    idsOrRanges: (ID | Range)[],
): void {
    const group = getDeepProperty(save, groupPath);
    if(!group) return;

    for(const idOrRange of idsOrRanges) {
        if(typeof idOrRange !== 'object') {
            deleteTask(save, groupPath, idOrRange);
        }
        else {
            const { start, end } = idOrRange;
            const startInt = typeof start === 'string' ? parseInt(start, 10) : start;
            const endInt = typeof end === 'string' ? parseInt(end, 10) : end;

            for(let i = startInt; i <= endInt; i++) {
                deleteTask(save, groupPath, i.toString());
            }
        }
    }
}
