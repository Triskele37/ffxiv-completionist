import { untracked } from '@angular/core';

import type { Task } from '@model/Task';
import { Completion } from '@constant';

import type { TableServiceContext } from '../types';

/**
 * Return boolean indicating if task should be filtered out
 * based on completionFlag and completion filter settings
 * */
export function filterFlagCompletion(
    this: TableServiceContext,
    task: Task,
): boolean {
    const flag = untracked(() => task.completionFlag$());

    switch(flag) {
        case Completion.Y: return this.filter.completion.completed;
        case Completion.N: return this.filter.completion.incomplete;
        case Completion.X: return this.filter.completion.excluded;
        default: return this.filter.completion.incomplete;
    }
}
