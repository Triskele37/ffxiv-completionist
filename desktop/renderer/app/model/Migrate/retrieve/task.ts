import type { PlayerSave } from '@common/PlayerSave';
import { CompletionFlag } from '@constant';

import type { ID } from '../types';
import { ensureDeepPath } from './ensureDeepPath';
import { getDeepProperty } from './getDeepProperty';

/**
 * Retrieve a task's completion if it exists
 * */
export function getTask(
    save: PlayerSave,
    groupPath: string,
    taskId: ID,
): CompletionFlag {
    const group = getDeepProperty(save, groupPath);
    return group?.[taskId];
}

/**
 * Set a task's completion regardless if it exists
 * */
export function setTask(
    save: PlayerSave,
    groupPath: string,
    taskId: ID,
    flag: CompletionFlag,
): void {
    const group = ensureDeepPath(save, groupPath);
    group[taskId] = flag;
}
