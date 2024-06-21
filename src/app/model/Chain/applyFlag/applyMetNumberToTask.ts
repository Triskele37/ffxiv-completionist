import { Completion } from '@constant';
import { Task } from '@model/Task';
import { changeCompletion } from '@model/Task/completion/changeCompletion';

export function applyMetNumberToTask(num: string, chainTask: Task): void {
    if(!chainTask.isNumericCompletion) { // "at" threshold met, must be Y
        changeCompletion(chainTask, Completion.Y);
    }
    else if(parseInt(num, 10) > parseInt(chainTask.completionFlag, 10)) {
        // only apply increases in completion number
        changeCompletion(chainTask, num);
    }
}
