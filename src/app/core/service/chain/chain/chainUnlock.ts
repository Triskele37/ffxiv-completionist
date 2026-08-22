import { Completion } from '@constant';

import { ChainServiceContext } from '../types';
import { ChainContext } from './_types';

/**
 * cUnlock
 * C.cUnlock(B.cPrev(A))
 * - A must be complete if C is
 * */
export function chainUnlock(
    this: ChainServiceContext,
    { task, flag, force }: ChainContext,
): void {
    // Early bail conditions
    if(!task.cUnlock) return;
    if(flag !== Completion.Y) return;

    const originalFlag = flag as Completion;

    this.svcData.get.getTasks(task.cUnlock, task).forEach((unlockTask) => {
        this.svcData.get.getTasks(unlockTask.cPrev, unlockTask).forEach((unlockPrevTask) => {
            if(unlockPrevTask.isNumericCompletion) {
                this.current.changeCompletion(unlockPrevTask, originalFlag);
            }
            else {
                this.apply.applyFlagToTask(unlockPrevTask, originalFlag, force);
            }
        });
    });
}
