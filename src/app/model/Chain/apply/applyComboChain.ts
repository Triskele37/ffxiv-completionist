import { Completion } from '@constant';
import { getTasks } from '@model/Task/get/getTasks';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { ChainMeta } from '../ChainMeta';

/**
 * - Specialized cNext link
 *
 * cCombo
 * A.cCombo(C.cPrev(A, B))
 * - For C to be complete, A and B must be
 * - When C.cPrevAny, either A or B must be
 *
 * */
export function applyComboChain({ task, flag, force }: ChainMeta): void {
    // Early bail conditions
    if(!task.cCombo) return;
    if(flag === Completion.X) return;

    getTasks(task.cCombo, task).forEach((comboTask) => {
        if(comboTask.cPrev) {
            if(comboTask.cPrevAny) {
                // Task requires any of a previous task
                const anyComplete = getTasks(comboTask.cPrev, task).some(
                    (task) => task.completionFlag$() === Completion.Y
                );

                const applyFlag = anyComplete ? Completion.Y : Completion.N;
                applyFlagToTask(comboTask, applyFlag, force);
            }
            else {
                // Task requires all previous tasks
                const allComplete = getTasks(comboTask.cPrev, task).every(
                    (task) => task.completionFlag$() === Completion.Y,
                );

                const applyFlag = allComplete ? Completion.Y : Completion.N;
                applyFlagToTask(comboTask, applyFlag, force);
            }
        }
    });
}

/**
 * cComboAt
 * - Base case but A and B must have specific numeric values
 * */
export function applyComboAtChain({ task, force }: ChainMeta): void {
    // Early bail conditions
    if(!task.cComboAt) return;

    Object.keys(task.cComboAt).forEach((at) => {
        getTasks(task.cComboAt?.[at], task).forEach((comboTask) => {
            if(comboTask.cPrevAt?.[at]) {
                // Task requires all previous tasks
                const allComplete = getTasks(comboTask.cPrevAt[at], task).every(
                    (task) => parseInt(task.completionFlag$(), 10) >= parseInt(at, 10)
                );

                const applyFlag = allComplete ? Completion.Y : Completion.N;
                applyFlagToTask(comboTask, applyFlag, force);
            }
        });
    });
}
