import { Completion } from '@constant';

import type { ChainService } from '../chain.service';
import type { ChainContext } from '../types';

/**
 * cSiblings
 * A.cSiblings(B)
 * - A and B must have same completion (not including X)
 * */
export function chainSiblings(service: ChainService) {
    return (
        { task, flag, force }: ChainContext,
    ): void => {
        // Early bail conditions
        if(!task.cSiblings) return;
        if(flag === Completion.X) return;

        const originalFlag = flag as Completion;

        service.svcData.getTasks(task.cSiblings, task).forEach((task) => {
            if(task.isNumericCompletion) {
                service.changeCompletion(task, originalFlag);
            }
            else {
                service.applyFlagToTask(task, originalFlag, force);
            }
        });
    };
}
