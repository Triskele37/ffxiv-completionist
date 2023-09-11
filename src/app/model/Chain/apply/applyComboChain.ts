import { Completion } from '@constant';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { Chainer } from '../Chainer';
import { getAllTasksFor } from '../getAllTasksFor';

export function applyComboChain(chainer: Chainer, comboAt?: string): void {
    const cCombo = !comboAt ? chainer.task.cCombo : chainer.task.cComboAt[comboAt];

    getAllTasksFor(chainer, cCombo).forEach((comboTask) => {
        if(comboTask.cPrev) {
            if(comboTask.cPrevAny) {
                // Task requires any of a previous task
                const anyComplete = getAllTasksFor(chainer, comboTask.cPrev).some(
                    (task) => task.completionFlag === Completion.Y
                );

                const applyFlag = anyComplete ? Completion.Y : Completion.N;
                applyFlagToTask(chainer, applyFlag, comboTask);
            }
            else {
                // Task requires all previous tasks
                const allComplete = getAllTasksFor(chainer, comboTask.cPrev).every(
                    (task) => task.completionFlag === Completion.Y,
                );

                const applyFlag = allComplete ? Completion.Y : Completion.N;
                applyFlagToTask(chainer, applyFlag, comboTask);
            }
        }
        else if(comboTask.cPrevAt?.[comboAt]) {
            // Task requires all previous tasks
            const allComplete = getAllTasksFor(chainer, comboTask.cPrevAt[comboAt]).every(
                (task) => parseInt(task.completionFlag, 10) >= parseInt(comboAt, 10)
            );

            const applyFlag = allComplete ? Completion.Y : Completion.N;
            applyFlagToTask(chainer, applyFlag, comboTask);
        }
    });
}
