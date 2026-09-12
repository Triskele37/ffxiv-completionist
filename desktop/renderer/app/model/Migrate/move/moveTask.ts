import type { PlayerSave } from '@common/PlayerSave';
import type { ID, Range } from '@common/Migration';

import { ensureDeepPath } from '../retrieve/ensureDeepPath';
import { getDeepProperty } from '../retrieve/getDeepProperty';
import { rebaseTaskMeta } from './rebaseMeta';

/**
 * Move a task from one group to another and rebase all meta associated with it
 * */
export function moveTask(
    save: PlayerSave,
    oldGroupPath: string,
    newGroupPath: string,
    taskId: ID,
): void {
    const oldGroup = getDeepProperty(save, oldGroupPath);
    const strId = taskId.toString();

    if(oldGroup?.[strId]) {
        const newGroup = ensureDeepPath(save, newGroupPath);

        newGroup[strId] = oldGroup[strId];
        delete oldGroup[strId];
    }

    rebaseTaskMeta(save, `${oldGroupPath}.${strId}`, `${newGroupPath}.${strId}`);
}

/**
 * Move multiple tasks from one group to another
 * */
export function moveTasks(
    save: PlayerSave,
    oldGroupPath: string,
    newGroupPath: string,
    idsOrRanges: (ID | Range)[],
): void {
    for(const idOrRange of idsOrRanges) {
        if(typeof idOrRange !== 'object') {
            moveTask(save, oldGroupPath, newGroupPath, idOrRange);
        }
        else {
            const { start, end } = idOrRange;
            const startInt = typeof start === 'string' ? parseInt(start, 10) : start;
            const endInt = typeof end === 'string' ? parseInt(end, 10) : end;

            for(let i = startInt; i <= endInt; i++) {
                moveTask(save, oldGroupPath, newGroupPath, i);
            }
        }
    }
}
