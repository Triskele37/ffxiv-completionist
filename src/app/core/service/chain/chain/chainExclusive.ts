import { Completion } from '@constant';

import { ChainServiceContext } from '../types';
import { ChainContext } from './_types';

/**
 * Special handling to cover the case of starting classes and
 * how that creates 3 divisions of exclusive content
 * */
export function chainExclusive(
    this: ChainServiceContext,
    { task, flag }: ChainContext,
): void {
    // Early bail conditions
    if(!task.cExclusive) return;

    this.svcData.get.getTasks(task.cExclusive, task).forEach((chainTask) => {
        if(flag === Completion.X) {
            // Chain exclusive tasks to be excluded as well
            this.apply.applyFlagToTask(chainTask, Completion.X, true);
        }
        else if(flag === Completion.N) {
            // Un-exclude any tasks excluded due to this task if marked incomplete
            this.svcData.get.getTasks(task.cExclude, task).forEach((task) => {
                if(task.completionFlag$() !== Completion.X) return;
                this.apply.applyFlagToTask(task, Completion.N, true);
            });

            // Chain exclusive tasks to be incomplete as well
            this.apply.applyFlagToTask(chainTask, Completion.N, true);
        }
        else if(flag === Completion.Y && chainTask.completionFlag$() === Completion.X) {
            // Un-exclude an exclusive task that was excluded when this is marked complete
            this.apply.applyFlagToTask(chainTask, Completion.N, true);
        }
    });
}
