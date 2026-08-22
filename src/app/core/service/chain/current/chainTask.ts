import { CompletionFlag } from '@constant';
import { Task } from '@model/Task';

import { ChainServiceContext } from '../types';

/**
 * Chaining logic that occurs after the flag has been updated
 * */
export function chainTask(
    this: ChainServiceContext,
    task: Task,
    firstInChain: boolean | undefined,
    toFlag: CompletionFlag
): void {
    const fromFlag = task.completionFlag$();
    this.svcMark.setCompletion(task, toFlag);

    // Commit this task to the stored chain
    if(firstInChain) {
        this.current.startChain({
            task,
            fromFlag,
            // setCompletion may not have ended with toFlag, use actual current value
            toFlag: task.completionFlag$()
        });
    }
    else {
        this.current.pushChained({
            task,
            fromFlag
        });
    }

    if(this.current.hasChainProps(task)) {
        this.chain.applyChains(task, task.completionFlag$(), this.force);
    }
}
