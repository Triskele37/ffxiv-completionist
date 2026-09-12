import type { PlayerSave } from '@common/PlayerSave';
import type { ID } from '@common/Migration';
import { CompletionFlag } from '@constant';

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
    return group?.[taskId.toString()];
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
    group[taskId.toString()] = flag;
}
