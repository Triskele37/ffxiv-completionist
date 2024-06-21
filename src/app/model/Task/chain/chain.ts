import { CompletionFlag } from '@constant';
import { triggerChains } from '@model/Chain/triggerChains';
import { ChainService } from '@service/chain/chain.service';

import { Task } from '../';
import { setCompletion } from '../completion/setCompletion';
import { hasChainProps } from './hasChainProps';

/**
 * Chaining logic that occurs after the flag has been updated
 * */
export function chain(
    task: Task,
    firstInChain: boolean,
    toFlag: CompletionFlag
): void {
    const fromFlag = task.completionFlag;
    setCompletion(task, toFlag);

    // Commit this task to the stored chain
    if(firstInChain) {
        ChainService.Instance.startChain({
            task,
            fromFlag,
            // setCompletion may not have ended with toFlag, use actual current value
            toFlag: task.completionFlag
        });
    }
    else {
        ChainService.Instance.pushChained({
            task,
            fromFlag
        });
    }

    if(hasChainProps(task)) {
        triggerChains(task, task.completionFlag, ChainService.force);
    }
}
