import { Completion } from '@constant';
import { getTasks } from '@model/Task/get/getTasks';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { ChainMeta } from '../ChainMeta';

/**
 * cExclude
 * A.cExclude(B)
 * - Y change: B must be excluded
 * - N change: B must be incomplete
 * */
export function applyExclusionChain({ task, force }: ChainMeta): void {
    // Early bail conditions
    if(!task.cExclude) return;

    getTasks(task.cExclude, task).forEach((targetTask) => {
        if(task.completionFlag$() === Completion.Y) {
            // Exclude the `targetTask` if `task` is marked Y
            applyFlagToTask(targetTask, Completion.X, force);
        }
        else if(task.completionFlag$() === Completion.N && targetTask.completionFlag$() === Completion.X) {
            // Unexclude `targetTask` if `task` is unmarked Y
            applyFlagToTask(targetTask, Completion.N, force);
        }
    });
}
