import { CompletionFlag } from '@constant';
import { Globals } from '@constant/Global';

import { Task } from '../';
import { shouldChain } from '../chain/shouldChain';
import { chain } from '../chain/chain';
import { setCompletion } from './setCompletion';

/**
 * Update `task.completionFlag$` and apply chaining
 *
 * @returns boolean - indicating whether the task was chained
 * */
export function changeCompletion(
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
    if(!Globals.config?.['chaining-enabled']) {
        setCompletion(task, to);
        return false;
    }
    else if(shouldChain(task, firstInChain, to)) {
        chain(task, firstInChain, to);
        return true;
    }

    return false;
}
