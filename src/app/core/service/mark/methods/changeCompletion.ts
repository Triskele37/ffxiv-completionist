import { CompletionFlag } from '@constant';
import { Task } from '@model/Task';

import { MarkServiceContext } from '../types';

/**
 * Update `task.completionFlag$` and apply chaining
 *
 * @returns boolean - indicating whether the task was chained
 * */
export function changeCompletion(
    this: MarkServiceContext,
    task: Task,
    to: CompletionFlag,
    firstInChain?: boolean
): boolean {
    // Don't continue if the current flag hasn't changed
    if(task.completionFlag$() === to) {
        // Clear the chainstore in the event the first chain is blocked
        // if(firstInChain) ChainService.Instance.undoCurrentChain();
        return false;
    }

    // Dodge all of this if chaining is disabled
    if(!this.svcConfig.get('chaining-enabled')) {
        this.setCompletion(task, to);
        return false;
    }
    else if(this.svcChain.current.shouldChain(task, firstInChain, to)) {
        this.svcChain.current.chainTask(task, firstInChain, to);
        return true;
    }

    return false;
}
