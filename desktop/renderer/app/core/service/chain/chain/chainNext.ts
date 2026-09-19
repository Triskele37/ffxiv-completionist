import { Completion } from '@constant';

import type { ChainService } from '../chain.service';
import type { ChainContext } from '../types';

/**
 * cNext
 * A.cNext(B)
 * - if A is incomplete, B must also be
 *
 * cUnlocks
 * A.cNext(B.cUnlocks(C))
 * - if A is incomplete, C must also be
 * */
export function chainNext(service: ChainService) {
    return (
        { task, flag, force }: ChainContext,
    ): void => {
        // Early bail conditions
        if(!task.cNext) return;
        if(flag !== Completion.N) return;

        service.svcData.getTasks(task.cNext, task).forEach((nextTask) => {
            if(nextTask.completionFlag$() === Completion.Y) {
                service.applyFlagToTask(nextTask, flag as Completion, force);
            }

            service.svcData.getTasks(nextTask.cUnlocks, nextTask).forEach((unlockedTask) => {
                if(unlockedTask.completionFlag$() === Completion.Y) {
                    service.applyFlagToTask(unlockedTask, flag as Completion, force);
                }
            });
        });
    };
}
