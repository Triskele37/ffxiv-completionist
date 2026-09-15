import { Completion } from '@constant';

import type { ChainService } from '../chain.service';
import type { ChainContext } from '../types';

/**
 * cUnlock
 * C.cUnlock(B.cPrev(A))
 * - A must be complete if C is
 * */
export function chainUnlock(service: ChainService) {
    return (
        { task, flag, force }: ChainContext,
    ): void => {
        // Early bail conditions
        if(!task.cUnlock) return;
        if(flag !== Completion.Y) return;

        const originalFlag = flag as Completion;

        service.svcData.getTasks(task.cUnlock, task).forEach((unlockTask) => {
            service.svcData.getTasks(unlockTask.cPrev, unlockTask).forEach((unlockPrevTask) => {
                if(unlockPrevTask.isNumericCompletion) {
                    service.changeCompletion(unlockPrevTask, originalFlag);
                }
                else {
                    service.applyFlagToTask(unlockPrevTask, originalFlag, force);
                }
            });
        });
    };
}
