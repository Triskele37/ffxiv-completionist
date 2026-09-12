import type { Completion } from '@constant';
import { updateCompletion } from '@model/DataGroup/updateCompletion';
import type { Task } from '@model/Task';

import type { MarkServiceContext } from '../types';

/**
 * Update `task.completionFlag$` as a flag
 * */
export function setCompletionFlag(
    this: MarkServiceContext,
    task: Task,
    flag: Completion,
): void {
    const fromFlag = task.completionFlag$();

    // Do nothing if the flag isn't changing
    if(fromFlag === flag) return; // MUI IMPORTANTE

    // Update the task's flag
    task.completionFlag$.set(flag);

    // Fire the group's update$ notification
    updateCompletion(task._parent);
}
