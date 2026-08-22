import { Completion } from '@constant';

import { ChainServiceContext } from '../types';
import { ChainContext } from './_types';

/**
 * cPrev
 * B.cPrev(A)
 * - If A is incomplete, B must be (handled by cNext)
 * - If B is complete, A must be (handled here)
 *
 * cPrevAny
 * B.cPrev(A, B) & cPrevAny
 * - Only one of A or B need to be complete for B to be complete
 * */
export function chainPrev(
    this: ChainServiceContext,
    { task, flag, force }: ChainContext,
): void {
    // Early bail conditions
    if(!task.cPrev) return;
    if(task.cPrevAny) return;
    if(flag !== Completion.Y) return;

    const originalFlag = flag as Completion;

    this.svcData.get.getTasks(task.cPrev, task).forEach((task) => {
        this.apply.applyFlagToTask(task, originalFlag, force);
    });
}
