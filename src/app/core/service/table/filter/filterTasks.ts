import { untracked } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { fuzzyMatchObject } from '@model/util/fuzzyMatch';

import { TableServiceContext } from '../types';

/**
 * Filter change via external, don't trigger onFilterUpdate$
 * Also ensure no signals are tracked, nasty bug happens with the clear effect
 * */
export function filterTasks(
    this: TableServiceContext,
    group: DataGroup,
    tasks: Task[],
): Task[] {
    const selectedTask = untracked(() => this.svcNavigation.selectedTask());

    return tasks
        .filter((task) => {
            // Don't filter out a nav selected task
            if(task === selectedTask) return true;

            const completionFilter = task.isNumericCompletion ?
                this.filter.filterNumericCompletion.bind(this) :
                this.filter.filterFlagCompletion.bind(this);

            if(!completionFilter(task)) return false;

            if(!group.columns) {
                console.error('Error: no columns for group', group);
                return [];
            }

            return group.columns.every(({ key, link }) => {
                const filter = this.filter.filters[key];
                if(!filter) return true;

                if(filter.value === 'Blank' || filter.value === '_') { // filter out values
                    return !task[key];
                }
                else if(filter.value === '*') { // filter out blanks
                    return !!task[key];
                }
                else if(filter.key === 'patch') {
                    return task[key] === filter.value;
                }
                else {
                    return fuzzyMatchObject(task, key, filter.value, true, link);
                }
            });
        });
}
