import type { Task } from '@model/Task';

import type { ChainServiceContext } from '../types';

/**
 * @param task - The task to check for chaining on
 * @returns boolean - indicating if the task has chain props
 * */
export function hasChainProps(
    this: ChainServiceContext,
    task: Task,
): boolean {
    return !!(
        task.cPrev ??
        task.cPrevAt ??
        task.cNext ??
        task.cSiblings ??
        task.cSiblingsAt ??
        task.cCombo ??
        task.cComboAt ??
        task.cExclude ??
        task.cExclusive ??
        task.cUnlock ??
        task.cUnlocks ??
        false
    );
}
