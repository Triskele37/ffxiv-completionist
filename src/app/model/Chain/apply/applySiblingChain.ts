import { Completion } from '@constant';
import { changeCompletion } from '@model/Task/completion/changeCompletion';
import { getTasks } from '@model/Task/get/getTasks';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { ChainMeta } from '../ChainMeta';

/**
 * cSiblings
 * A.cSiblings(B)
 * - A and B must have same completion (not including X)
 * */
export function applySiblingChain({ task, flag, force }: ChainMeta): void {
    // Early bail conditions
    if(!task.cSiblings) return;
    if(flag === Completion.X) return;

    const originalFlag = flag as Completion;

    getTasks(task.cSiblings, task).forEach((task) => {
        if(task.isNumericCompletion) {
            changeCompletion(task, originalFlag);
        }
        else {
            applyFlagToTask(task, originalFlag, force);
        }
    });
}
