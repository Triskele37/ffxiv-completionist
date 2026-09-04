import { Completion } from '@constant';
import type { Task } from '@model/Task';

import type { ChainServiceContext } from '../types';

export function applyFlagToTask(
    this: ChainServiceContext,
    chainTask: Task,
    flag: Completion,
    force?: boolean,
): void {
    const isExcluded = chainTask.completionFlag$() === Completion.X;
    const isDefaultExcluded = chainTask.defaultCompletion === Completion.X;

    if(!isExcluded || isDefaultExcluded || force) {
        this.current.changeCompletion(chainTask, flag);
    }
}
