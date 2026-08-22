import { Completion } from '@constant';

import { ChainServiceContext } from '../types';
import { ChainContext } from './_types';

/**
 * cSiblings
 * A.cSiblings(B)
 * - A and B must have same completion (not including X)
 * */
export function chainSiblings(
    this: ChainServiceContext,
    { task, flag, force }: ChainContext,
): void {
    // Early bail conditions
    if(!task.cSiblings) return;
    if(flag === Completion.X) return;

    const originalFlag = flag as Completion;

    this.svcData.get.getTasks(task.cSiblings, task).forEach((task) => {
        if(task.isNumericCompletion) {
            this.current.changeCompletion(task, originalFlag);
        }
        else {
            this.apply.applyFlagToTask(task, originalFlag, force);
        }
    });
}
