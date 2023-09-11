import { Completion } from '@constant';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { Chainer } from '../Chainer';
import { getAllTasksFor } from '../getAllTasksFor';

export function applyExclusionChain(chainer: Chainer): void {
    getAllTasksFor(chainer, chainer.task.cExclude).forEach((task) => {
        if(chainer.task.completionFlag === Completion.Y) {
            // Exclude the task if the chaining one is marked Y
            applyFlagToTask(chainer, Completion.X, task);
        }
        else if(chainer.task.completionFlag === Completion.N && task.completionFlag === Completion.X) {
            // Unexclude task if the chaining one is unmarked Y
            applyFlagToTask(chainer, Completion.N, task);
        }
        else if(chainer.task.completionFlag === Completion.X) {
            // merp
        }
    });
}
