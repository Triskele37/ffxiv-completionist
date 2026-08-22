import { Completion } from '@constant';
import { Task } from '@model/Task';
import { changeCompletion } from '@model/Task/completion/changeCompletion';

export function applyFlagToTask(chainTask: Task, flag: Completion, force?: boolean): void {
    const isExcluded = chainTask.completionFlag$() === Completion.X;
    const isDefaultExcluded = chainTask.defaultCompletion === Completion.X;

    if(!isExcluded || isDefaultExcluded || force) {
        changeCompletion(chainTask, flag);
    }
}
