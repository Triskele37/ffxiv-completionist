import type { CompletionFlag } from '@constant';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

/**
 * Checks performed before setting the new flag and chaining
 * */
export function shouldChain(service: ChainService) {
    return (
        task: Task,
        firstInChain: boolean | undefined,
        toFlag: CompletionFlag,
    ): boolean => {
        if(firstInChain) return true;

        // Don't continue if this task has already been chained through
        return !service.taskAlreadyChained(task, toFlag);
    };
}
