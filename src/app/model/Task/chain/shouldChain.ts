import { CompletionFlag } from '@constant';
import { ChainService } from '@service/chain/chain.service';

import { Task } from '../';

/**
 * Checks performed before setting the new flag and chaining
 * */
export function shouldChain(
    task: Task,
    firstInChain: boolean | undefined,
    toFlag: CompletionFlag
): boolean {
    if(firstInChain) return true;

    // Don't continue if this task has already been chained through
    return !ChainService.Instance.taskAlreadyChained(task, toFlag);
}
