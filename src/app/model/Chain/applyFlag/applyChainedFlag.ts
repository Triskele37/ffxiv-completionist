import { Completion } from '@constant';

import { Chainer } from '../Chainer';
import { Links } from '../ChainLink';
import { getAllTasksFor } from '../getAllTasksFor';
import { applyFlagToTask } from './applyFlagToTask';

// Generic Chain for flags
export function applyChainedFlag(chainer: Chainer, cList: Links): void {
    const originalFlag = chainer.flag as Completion;

    getAllTasksFor(chainer, cList).forEach((task) => {
        applyFlagToTask(chainer, originalFlag, task);
    });
}
