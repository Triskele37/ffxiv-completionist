import { Completion } from '@constant';
import { Task } from '@model/Task';
import { changeCompletion } from '@model/Task/completion/changeCompletion';

export function applyUnmetNumberToTask(num: string, chainTask: Task, siblings: number): void {
    if(!chainTask.isNumericCompletion) { // "at" threshold not met, must be N
        changeCompletion(chainTask, Completion.N);
    }
    else if(siblings === 1) {
        // cannot assume which sibling should be lowered
        if(parseInt(num, 10) < parseInt(chainTask.completionFlag$(), 10)) {
            // only apply decreases in completion number
            changeCompletion(chainTask, num);
        }
    }
}
