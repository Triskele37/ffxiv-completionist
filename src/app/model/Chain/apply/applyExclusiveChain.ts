import { Completion } from '@constant';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { Chainer } from '../Chainer';
import { getAllTasksFor } from '../getAllTasksFor';

export function applyExclusiveChain(chainer: Chainer): void {
    // starting class exclusive content is jank
    chainer.force = true;

    getAllTasksFor(chainer, chainer.task.cExclusive).forEach((chainTask) => {
        if(chainer.flag === Completion.X) {
            // Chain exclusive tasks to be excluded as well
            applyFlagToTask(chainer, Completion.X, chainTask);
        }
        else if(chainer.flag === Completion.N) {
            // Un-exclude any tasks excluded due to this task if marked incomplete
            getAllTasksFor(chainer, chainer.task.cExclude).forEach((task) => {
                if(task.completionFlag !== Completion.X) return;
                applyFlagToTask(chainer, Completion.N, task);
            });

            // Chain exclusive tasks to be incomplete as well
            applyFlagToTask(chainer, Completion.N, chainTask);
        }
        else if(chainer.flag === Completion.Y && chainTask.completionFlag === Completion.X) {
            // Un-exclude an exclusive task that was excluded when this is marked complete
            applyFlagToTask(chainer, Completion.N, chainTask);
        }
    });
}
