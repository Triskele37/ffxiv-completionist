import type { Task } from '@model/Task';
import { isExcluded } from './isExcluded';
import { isIncomplete } from './isIncomplete';

export function isIncompleteOrExcluded(task: Task, threshold?: number): boolean {
    return isIncomplete(task, threshold) || isExcluded(task);
}
