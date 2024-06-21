import { Task } from '../';

/**
 * @param task - The task to check for chaining on
 * @returns boolean - indicating if the task has chain props
 * */
export function hasChainProps(task: Task): boolean {
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
        false
    ) !== false;
}
