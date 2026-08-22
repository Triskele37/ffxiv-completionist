import { Task } from '@model/Task';

import { MarkServiceContext } from '../types';
/**
 * Get the default value for a numeric task when unmodified
 * */
export function getDefaultNumericCompletion(
    this: MarkServiceContext,
    task: Task
): number {
    if(isNaN(Number(task.defaultCompletion))) {
        return 0;
    }
    else {
        return parseFloat(task.defaultCompletion);
    }
}
