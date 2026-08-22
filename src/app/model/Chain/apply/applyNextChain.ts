import { Completion } from '@constant';
import { getTasks } from '@model/Task/get/getTasks';

import { ChainMeta } from '../ChainMeta';
import { applyFlagToTask } from '../applyFlag/applyFlagToTask';

/**
 * cNext
 * A.cNext(B)
 * - if A is incomplete, B must also be
 *
 * cUnlocks
 * A.cNext(B.cUnlocks(C))
 * - if A is incomplete, C must also be
 * */
export function applyNextChain({ task, flag, force }: ChainMeta): void {
    // Early bail conditions
    if(!task.cNext) return;
    if(flag !== Completion.N) return;

    getTasks(task.cNext, task).forEach((nextTask) => {
        if(nextTask.completionFlag$() === Completion.Y) {
            applyFlagToTask(nextTask, flag as Completion, force);
        }

        getTasks(nextTask.cUnlocks, nextTask).forEach((unlockedTask) => {
            if(unlockedTask.completionFlag$() === Completion.Y) {
                applyFlagToTask(unlockedTask, flag as Completion, force);
            }
        });
    });
}
