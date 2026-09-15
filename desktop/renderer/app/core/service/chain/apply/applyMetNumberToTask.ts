import { Completion } from '@constant';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

export function applyMetNumberToTask(service: ChainService) {
    return (
        num: string,
        chainTask: Task,
    ): void => {
        if(!chainTask.isNumericCompletion) { // "at" threshold met, must be Y
            service.changeCompletion(chainTask, Completion.Y);
        }
        else if(parseInt(num, 10) > parseInt(chainTask.completionFlag$(), 10)) {
            // only apply increases in completion number
            service.changeCompletion(chainTask, num);
        }
    };
}
