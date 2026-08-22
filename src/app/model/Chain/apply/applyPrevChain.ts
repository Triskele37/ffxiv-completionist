import { Completion } from '@constant';
import { getTasks } from '@model/Task/get/getTasks';

import { ChainMeta } from '@model/Chain/ChainMeta';
import { applyFlagToTask } from '@model/Chain/applyFlag/applyFlagToTask';

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
export function applyPrevChain({ task, flag, force }: ChainMeta): void {
    // Early bail conditions
    if(!task.cPrev) return;
    if(task.cPrevAny) return;
    if(flag !== Completion.Y) return;

    const originalFlag = flag as Completion;

    getTasks(task.cPrev, task).forEach((task) => {
        applyFlagToTask(task, originalFlag, force);
    });
}
