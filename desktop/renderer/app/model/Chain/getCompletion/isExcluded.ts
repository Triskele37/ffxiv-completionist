import { Completion } from '@constant';
import type { Task } from '@model/Task';

export function isExcluded(task: Task): boolean {
    return task.completionFlag$() === Completion.X;
}
