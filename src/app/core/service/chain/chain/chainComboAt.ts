import { Completion } from '@constant';

import { ChainServiceContext } from '../types';
import { ChainContext } from './_types';

/**
 * cComboAt
 * - Base case but A and B must have specific numeric values
 * */
export function chainComboAt(
    this: ChainServiceContext,
    { task, force }: ChainContext,
): void {
    // Early bail conditions
    if(!task.cComboAt) return;

    Object.keys(task.cComboAt).forEach((at) => {
        this.svcData.get.getTasks(task.cComboAt?.[at], task).forEach((comboTask) => {
            if(comboTask.cPrevAt?.[at]) {
                // Task requires all previous tasks
                const allComplete = this.svcData.get.getTasks(comboTask.cPrevAt[at], task).every(
                    (task) => parseInt(task.completionFlag$(), 10) >= parseInt(at, 10)
                );

                const applyFlag = allComplete ? Completion.Y : Completion.N;
                this.apply.applyFlagToTask(comboTask, applyFlag, force);
            }
        });
    });
}
