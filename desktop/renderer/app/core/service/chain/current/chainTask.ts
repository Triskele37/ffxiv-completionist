import type { CompletionFlag } from '@constant';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

/**
 * Chaining logic that occurs after the flag has been updated
 * */
export function chainTask(service: ChainService) {
    return (
        task: Task,
        firstInChain: boolean | undefined,
        toFlag: CompletionFlag,
    ): void => {
        const fromFlag = task.completionFlag$();
        service.svcMark.setCompletion(task, toFlag);

        // Commit this task to the stored chain
        if(firstInChain) {
            service.startChain({
                task,
                fromFlag,
                // setCompletion may not have ended with toFlag, use actual current value
                toFlag: task.completionFlag$()
            });
        }
        else {
            service.pushChained({
                task,
                fromFlag
            });
        }

        if(service.hasChainProps(task)) {
            service.applyChains(task, task.completionFlag$(), service.force);
        }
    };
}
