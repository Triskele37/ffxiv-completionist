import { Completion } from '@constant';

import { ChainServiceContext } from '../types';
import { ChainContext } from './_types';

/**
 * cNext
 * A.cNext(B)
 * - if A is incomplete, B must also be
 *
 * cUnlocks
 * A.cNext(B.cUnlocks(C))
 * - if A is incomplete, C must also be
 * */
export function chainNext(
    this: ChainServiceContext,
    { task, flag, force }: ChainContext,
): void {
    // Early bail conditions
    if(!task.cNext) return;
    if(flag !== Completion.N) return;

    this.svcData.get.getTasks(task.cNext, task).forEach((nextTask) => {
        if(nextTask.completionFlag$() === Completion.Y) {
            this.apply.applyFlagToTask(nextTask, flag as Completion, force);
        }

        this.svcData.get.getTasks(nextTask.cUnlocks, nextTask).forEach((unlockedTask) => {
            if(unlockedTask.completionFlag$() === Completion.Y) {
                this.apply.applyFlagToTask(unlockedTask, flag as Completion, force);
            }
        });
    });
}
