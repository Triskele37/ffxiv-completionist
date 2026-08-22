import { untracked } from '@angular/core';

import { Completion } from '@constant';
import { Task } from '@model/Task';

import { TableServiceContext } from '../types';

/**
 * Return boolean indicating if task should be filtered out
 * based on completionFlag number and completion filter settings
 * */
export function filterNumericCompletion(
    this: TableServiceContext,
    task: Task,
): boolean {
    const flag = untracked(() => task.completionFlag$());
    if(flag === Completion.X) return this.filter.completion.excluded;
    if(flag === task.maxValue.toString()) return this.filter.completion.completed;
    return this.filter.completion.incomplete;
}
