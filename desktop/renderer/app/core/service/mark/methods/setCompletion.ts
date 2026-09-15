import type { Completion, CompletionFlag } from '@constant';
import type { Task } from '@model/Task';

import type { MarkService } from '../mark.service';

/**
 * Update `task.completionFlag$` as either a flag or numeric value
 * */
export function setCompletion(service: MarkService) {
    return (
        task: Task,
        flag: CompletionFlag,
    ) => {
        if(task.isNumericCompletion) {
            service.setCompletionNumber(task, flag);
        }
        else {
            service.setCompletionFlag(task, flag as Completion);
        }
    };
}
