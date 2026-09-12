import type { PlayerSave } from '@common/PlayerSave';

import type { ID } from '../types';
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
    taskIds: ID[],
): void {
    for(const taskId of taskIds) {
        moveTask(save, oldGroupPath, newGroupPath, taskId);
    }
}
