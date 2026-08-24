import { Completion } from '@constant';

import type { ChainServiceContext } from '../types';
import type { ChainContext } from './_types';

/**
 * - Specialized cNext link
 *
 * cCombo
 * A.cCombo(C.cPrev(A, B))
 * - For C to be complete, A and B must be
 * - When C.cPrevAny, either A or B must be
 *
 * */
export function chainCombo(
    this: ChainServiceContext,
    { task, flag, force }: ChainContext,
): void {
    // Early bail conditions
    if(!task.cCombo) return;
    if(flag === Completion.X) return;

    this.svcData.get.getTasks(task.cCombo, task).forEach((comboTask) => {
        if(comboTask.cPrev) {
            if(comboTask.cPrevAny) {
                // Task requires any of a previous task
                const anyComplete = this.svcData.get.getTasks(comboTask.cPrev, task).some(
                    (task) => task.completionFlag$() === Completion.Y
                );

                const applyFlag = anyComplete ? Completion.Y : Completion.N;
                this.apply.applyFlagToTask(comboTask, applyFlag, force);
            }
            else {
                // Task requires all previous tasks
                const allComplete = this.svcData.get.getTasks(comboTask.cPrev, task).every(
                    (task) => task.completionFlag$() === Completion.Y,
                );

                const applyFlag = allComplete ? Completion.Y : Completion.N;
                this.apply.applyFlagToTask(comboTask, applyFlag, force);
            }
        }
    });
}
