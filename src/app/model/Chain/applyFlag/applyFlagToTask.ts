import { Completion } from '@constant';
import { Task } from '@model/Task';
import { changeCompletion } from '@model/Task/completion/changeCompletion';

import { Chainer } from '../Chainer';

export function applyFlagToTask(chainer: Chainer, flag: Completion, chainTask: Task): void {
    const isExcluded = chainTask.completionFlag === Completion.X;
    const isDefaultExcluded = chainTask.defaultCompletion === Completion.X;

    if(!isExcluded || isDefaultExcluded || chainer.force) {
        changeCompletion(chainTask, flag);
    }
}
