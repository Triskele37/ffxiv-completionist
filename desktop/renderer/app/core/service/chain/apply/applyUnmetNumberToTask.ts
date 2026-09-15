import { Completion } from '@constant';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

export function applyUnmetNumberToTask(service: ChainService) {
    return (
        num: string,
        chainTask: Task,
        siblings: number,
    ): void => {
        if(!chainTask.isNumericCompletion) { // "at" threshold not met, must be N
            service.changeCompletion(chainTask, Completion.N);
        }
        else if(siblings === 1) {
            // cannot assume which sibling should be lowered
            if(parseInt(num, 10) < parseInt(chainTask.completionFlag$(), 10)) {
                // only apply decreases in completion number
                service.changeCompletion(chainTask, num);
            }
        }
    };
}

