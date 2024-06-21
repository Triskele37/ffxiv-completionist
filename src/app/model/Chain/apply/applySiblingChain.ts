import { Completion } from '@constant';
import { changeCompletion } from '@model/Task/completion/changeCompletion';

import { applyFlagToTask } from '../applyFlag/applyFlagToTask';
import { Chainer } from '../Chainer';
import { Links } from '../ChainLink';
import { getAllTasksFor } from '../getAllTasksFor';

export function applySiblingChain(chainer: Chainer, cList: Links): void {
    const originalFlag = chainer.flag as Completion;

    getAllTasksFor(chainer, cList).forEach((task) => {
        if(task.isNumericCompletion) {
            changeCompletion(task, originalFlag);
        }
        else {
            applyFlagToTask(chainer, originalFlag, task);
        }
    });
}
