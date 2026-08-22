import { Completion } from '@constant';
import { Task } from '@model/Task';

export function isComplete(task: Task, threshold?: number): boolean {
    if(task.isNumericCompletion && threshold) {
        const current = parseInt(task.completionFlag$() ?? 0);
        return current >= threshold;
    }

    const effectiveCompleted = task.isNumericCompletion ? task.maxValue.toString() : Completion.Y;
    return task.completionFlag$() === effectiveCompleted;
}
