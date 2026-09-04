import type { Completion, CompletionFlag } from '@constant';
import type { Task } from '@model/Task';

import type { MarkServiceContext } from '../types';

/**
 * Update `task.completionFlag$` as either a flag or numeric value
 * */
export function setCompletion(
    this: MarkServiceContext,
    task: Task,
    flag: CompletionFlag,
): void {
    if(task.isNumericCompletion) {
        this.setCompletionNumber(task, flag);
    }
    else {
        this.setCompletionFlag(task, flag as Completion);
    }
}
