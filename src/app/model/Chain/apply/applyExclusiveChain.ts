import { Completion } from '@constant';
import { getTasks } from '@model/Task/get/getTasks';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { ChainMeta } from '../ChainMeta';

/**
 * Special handling to cover the case of starting classes and
 * how that creates 3 divisions of exclusive content
 * */
export function applyExclusiveChain({ task, flag }: ChainMeta): void {
    // Early bail conditions
    if(!task.cExclusive) return;

    getTasks(task.cExclusive, task).forEach((chainTask) => {
        if(flag === Completion.X) {
            // Chain exclusive tasks to be excluded as well
            applyFlagToTask(chainTask, Completion.X, true);
        }
        else if(flag === Completion.N) {
            // Un-exclude any tasks excluded due to this task if marked incomplete
            getTasks(task.cExclude, task).forEach((task) => {
                if(task.completionFlag$() !== Completion.X) return;
                applyFlagToTask(task, Completion.N, true);
            });

            // Chain exclusive tasks to be incomplete as well
            applyFlagToTask(chainTask, Completion.N, true);
        }
        else if(flag === Completion.Y && chainTask.completionFlag$() === Completion.X) {
            // Un-exclude an exclusive task that was excluded when this is marked complete
            applyFlagToTask(chainTask, Completion.N, true);
        }
    });
}
