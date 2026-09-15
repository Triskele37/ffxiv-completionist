import type { Task } from '@model/Task';

import type { MarkService } from '../mark.service';

/**
 * Get the default value for a numeric task when unmodified
 * */
export function getDefaultNumericCompletion(service: MarkService) {
    return (
        task: Task,
    ): number => {
        if(isNaN(Number(task.defaultCompletion))) {
            return 0;
        }
        else {
            return parseFloat(task.defaultCompletion);
        }
    };
}
