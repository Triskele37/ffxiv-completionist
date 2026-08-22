import { Completion } from '@constant';
import { Task } from '@model/Task';

import { ChainServiceContext } from '../types';

export function applyMetNumberToTask(
    this: ChainServiceContext,
    num: string,
    chainTask: Task,
): void {
    if(!chainTask.isNumericCompletion) { // "at" threshold met, must be Y
        this.current.changeCompletion(chainTask, Completion.Y);
    }
    else if(parseInt(num, 10) > parseInt(chainTask.completionFlag$(), 10)) {
        // only apply increases in completion number
        this.current.changeCompletion(chainTask, num);
    }
}
