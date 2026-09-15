import { untracked } from '@angular/core';

import type { Task } from '@model/Task';
import { Completion } from '@constant';

import type { TableService } from '../table.service';

/**
 * Return boolean indicating if task should be filtered out
 * based on completionFlag and completion filter settings
 * */
export function filterFlagCompletion(service: TableService) {
    return (
        task: Task,
    ): boolean => {
        const flag = untracked(() => task.completionFlag$());

        switch(flag) {
            case Completion.Y: return service.completionFilter.completed;
            case Completion.N: return service.completionFilter.incomplete;
            case Completion.X: return service.completionFilter.excluded;
            default: return service.completionFilter.incomplete;
        }
    };
}
