import { CompletionFlag } from '@constant';
import { Task } from '@model/Task';

import { ChainServiceContext } from '../types';

/**
 * Checks performed before setting the new flag and chaining
 * */
export function shouldChain(
    this: ChainServiceContext,
    task: Task,
    firstInChain: boolean | undefined,
    toFlag: CompletionFlag
): boolean {
    if(firstInChain) return true;

    // Don't continue if this task has already been chained through
    return !this.current.taskAlreadyChained(task, toFlag);
}
