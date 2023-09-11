import { Completion, CompletionFlag } from '@constant';

import { Task } from '../';
import { setCompletionFlag } from './setCompletionFlag';
import { setCompletionNumber } from './setCompletionNumber';

/**
 * Update `task.completionFlag` as either a flag or numeric value
 * */
export function setCompletion(task: Task, flag: CompletionFlag): void {
    if(task.isNumericCompletion) {
        setCompletionNumber(task, flag);
    }
    else {
        setCompletionFlag(task, flag as Completion);
    }
}
