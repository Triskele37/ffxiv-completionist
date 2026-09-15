import { untracked } from '@angular/core';

import { Completion } from '@constant';
import type { Task } from '@model/Task';

import type { TableService } from '../table.service';

/**
 * Return boolean indicating if task should be filtered out
 * based on completionFlag number and completion filter settings
 * */
export function filterNumericCompletion(service: TableService) {
    return (
        task: Task,
    ): boolean => {
        const flag = untracked(() => task.completionFlag$());
        if(flag === Completion.X) return service.completionFilter.excluded;
        if(flag === task.maxValue.toString()) return service.completionFilter.completed;
        return service.completionFilter.incomplete;
    };
}
