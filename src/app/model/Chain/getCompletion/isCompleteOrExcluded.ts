import { Task } from '@model/Task';
import { isComplete } from './isComplete';
import { isExcluded } from './isExcluded';

export function isCompleteOrExcluded(task: Task, threshold?: number): boolean {
    return isComplete(task, threshold) || isExcluded(task);
}
