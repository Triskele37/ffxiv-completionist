import type { CompletionFlag } from '@constant';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

/**
 * Update `task.completionFlag$` and apply chaining
 *
 * @returns boolean - indicating whether the task was chained
 * */
export function changeCompletion(service: ChainService) {
    return (
        task: Task,
        to: CompletionFlag,
        firstInChain?: boolean,
    ): boolean => {
        // Don't continue if the current flag hasn't changed
        if(task.completionFlag$() === to) {
            // Clear the chainstore in the event the first chain is blocked
            // if(firstInChain) ChainService.Instance.undoCurrentChain();
            return false;
        }

        // Dodge all of this if chaining is disabled
        if(!service.svcConfig.get('chaining-enabled')) {
            service.svcMark.setCompletion(task, to);
            return false;
        }
        else if(service.shouldChain(task, firstInChain, to)) {
            service.chainTask(task, firstInChain, to);
            return true;
        }

        return false;
    };
}
