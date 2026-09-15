import { Completion } from '@constant';

import type { ChainService } from '../chain.service';
import type { ChainContext } from '../types';

/**
 * cExclude
 * A.cExclude(B)
 * - Y change: B must be excluded
 * - N change: B must be incomplete
 * */
export function chainExclude(service: ChainService) {
    return (
        { task, force }: ChainContext,
    ): void => {
        // Early bail conditions
        if(!task.cExclude) return;

        service.svcData.getTasks(task.cExclude, task).forEach((targetTask) => {
            if(task.completionFlag$() === Completion.Y) {
                // Exclude the `targetTask` if `task` is marked Y
                service.applyFlagToTask(targetTask, Completion.X, force);
            }
            else if(task.completionFlag$() === Completion.N && targetTask.completionFlag$() === Completion.X) {
                // Unexclude `targetTask` if `task` is unmarked Y
                service.applyFlagToTask(targetTask, Completion.N, force);
            }
        });
    };
}
