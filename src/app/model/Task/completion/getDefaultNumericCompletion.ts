import { Task } from '../';

/**
 * Get the default value for a numeric task when unmodified
 * */
export function getDefaultNumericCompletion(task: Task): number {
    if(isNaN(Number(task.defaultCompletion))) {
        return 0;
    }
    else {
        return parseFloat(task.defaultCompletion);
    }
}
