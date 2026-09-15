import { Completion } from '@constant';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

export function applyFlagToTask(service: ChainService) {
    return (
        chainTask: Task,
        flag: Completion,
        force?: boolean,
    ): void => {
        const isExcluded = chainTask.completionFlag$() === Completion.X;
        const isDefaultExcluded = chainTask.defaultCompletion === Completion.X;

        if(!isExcluded || isDefaultExcluded || force) {
            service.changeCompletion(chainTask, flag);
        }
    };
}

