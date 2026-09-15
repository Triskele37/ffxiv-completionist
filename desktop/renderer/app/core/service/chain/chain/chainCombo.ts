import { Completion } from '@constant';

import type { ChainService } from '../chain.service';
import type { ChainContext } from '../types';

/**
 * - Specialized cNext link
 *
 * cCombo
 * A.cCombo(C.cPrev(A, B))
 * - For C to be complete, A and B must be
 * - When C.cPrevAny, either A or B must be
 *
 * */
export function chainCombo(service: ChainService) {
    return (
        { task, flag, force }: ChainContext,
    ): void => {
        // Early bail conditions
        if(!task.cCombo) return;
        if(flag === Completion.X) return;

        service.svcData.getTasks(task.cCombo, task).forEach((comboTask) => {
            if(comboTask.cPrev) {
                if(comboTask.cPrevAny) {
                    // Task requires any of a previous task
                    const anyComplete = service.svcData.getTasks(comboTask.cPrev, task).some(
                        (task) => task.completionFlag$() === Completion.Y
                    );

                    const applyFlag = anyComplete ? Completion.Y : Completion.N;
                    service.applyFlagToTask(comboTask, applyFlag, force);
                }
                else {
                    // Task requires all previous tasks
                    const tasks = service.svcData.getTasks(comboTask.cPrev, task);
                    const allComplete = tasks.length && tasks.every(
                        (task) => task.completionFlag$() === Completion.Y,
                    );

                    const applyFlag = allComplete ? Completion.Y : Completion.N;
                    service.applyFlagToTask(comboTask, applyFlag, force);
                }
            }
        });
    };
}
