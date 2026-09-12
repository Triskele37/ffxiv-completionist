import type { Task } from '@model/Task';
import { isComplete } from './isComplete';
import { isExcluded } from './isExcluded';

export function isIncomplete(task: Task, threshold?: number): boolean {
    return !isComplete(task, threshold) && !isExcluded(task);
}
