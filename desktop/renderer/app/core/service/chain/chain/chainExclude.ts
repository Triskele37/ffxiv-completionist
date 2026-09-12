import { Completion } from '@constant';

import type { ChainServiceContext } from '../types';
import type { ChainContext } from './_types';

/**
 * cExclude
 * A.cExclude(B)
 * - Y change: B must be excluded
 * - N change: B must be incomplete
 * */
export function chainExclude(
    this: ChainServiceContext,
    { task, force }: ChainContext,
): void {
    // Early bail conditions
    if(!task.cExclude) return;

    this.svcData.get.getTasks(task.cExclude, task).forEach((targetTask) => {
        if(task.completionFlag$() === Completion.Y) {
            // Exclude the `targetTask` if `task` is marked Y
            this.apply.applyFlagToTask(targetTask, Completion.X, force);
        }
        else if(task.completionFlag$() === Completion.N && targetTask.completionFlag$() === Completion.X) {
            // Unexclude `targetTask` if `task` is unmarked Y
            this.apply.applyFlagToTask(targetTask, Completion.N, force);
        }
    });
}
