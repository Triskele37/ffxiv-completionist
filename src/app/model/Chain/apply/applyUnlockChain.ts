import { Completion } from '@constant';
import { changeCompletion } from '@model/Task/completion/changeCompletion';
import { getTasks } from '@model/Task/get/getTasks';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { ChainMeta } from '../ChainMeta';

/**
 * cUnlock
 * C.cUnlock(B.cPrev(A))
 * - A must be complete if C is
 * */
export function applyUnlockChain({ task, flag, force }: ChainMeta): void {
    // Early bail conditions
    if(!task.cUnlock) return;
    if(flag !== Completion.Y) return;

    const originalFlag = flag as Completion;

    getTasks(task.cUnlock, task).forEach((unlockTask) => {
        getTasks(unlockTask.cPrev, unlockTask).forEach((unlockPrevTask) => {
            if(unlockPrevTask.isNumericCompletion) {
                changeCompletion(unlockPrevTask, originalFlag);
            }
            else {
                applyFlagToTask(unlockPrevTask, originalFlag, force);
            }
        });
    });
}
