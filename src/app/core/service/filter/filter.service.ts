import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Completion } from '@constant';
import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { NavigationService } from '@service/navigation/navigation.service';
import { ConfigStoreService } from '@service/store/config-store.service';
import { fuzzyMatchObject } from '@util/fuzzyMatch';

export type CompletionFilter = {
    completed: boolean;
    incomplete: boolean;
    excluded: boolean;
};

export type Filters = {
    [key: string]: {
        key?: string;
        value?: string;
    };
};

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    completion: CompletionFilter = {
        completed: false,
        incomplete: false,
        excluded: false,
    };

    filters: Filters = {};

    onFilterUpdate$ = new Subject<void>();

    constructor(
        private svcNavigation: NavigationService,
        private svcConfig: ConfigStoreService
    ) {
        const filters = this.svcConfig.get('table-filters');
        this.completion.completed = !!filters.completed;
        this.completion.incomplete = !!filters.incomplete;
        this.completion.excluded = !!filters.excluded;

        this.onFilterUpdate$.next();

        this.svcNavigation.selectedGroup$.subscribe(() => {
            this.filters = {};
            this.onFilterUpdate$.next();
        });
    }

    onFilterCompletion(value: Completion): void {
        const key = {
            [Completion.Y]: 'completed',
            [Completion.N]: 'incomplete',
            [Completion.X]: 'excluded'
        }[value];

        this.completion[key] = !this.completion[key];
        this.svcConfig.set(`table-filters.${key}`, this.completion[key]);

        this.onFilterUpdate$.next();
    }

    modifySearch(value, column): void {
        // Don't run filter unnecessarily
        if(this.filters[column.key]?.value === value) return;

        // If a value exists the filter is being added or modified, otherwise null it out
        this.filters[column.key] = !value ? null : {
            key: column.key,
            value
        };

        this.onFilterUpdate$.next();
    }

    filterTasks(group: DataGroup, tasks: Task[]): Task[] {
        return tasks
            .filter((task) => {
                const completionFilter = task.isNumericCompletion ?
                    this.filterNumericCompletion.bind(this) :
                    this.filterFlagCompletion.bind(this);

                if(!completionFilter(task)) return false;

                if(!group.columns) {
                    console.log(group);
                }
                return group.columns.every(({ key, link }) => {
                    const filter = this.filters[key];
                    if(!filter) return true;

                    if(filter.value === 'Blank') { // filter out values
                        return !task[key];
                    }
                    else if(filter.value === '*') { // filter out blanks
                        return !!task[key];
                    }
                    else {
                        return fuzzyMatchObject(task, key, filter.value, true, link);
                    }
                });
            });
    }

    filterFlagCompletion(task: Task): boolean {
        switch(task.completionFlag) {
            case Completion.Y:
                return this.completion.completed;
            case Completion.N:
                return this.completion.incomplete;
            case Completion.X:
                return this.completion.excluded;
            default:
                return this.completion.incomplete;
        }
    }

    filterNumericCompletion(task: Task): boolean {
        if(task.completionFlag === Completion.X) return this.completion.excluded;
        if(task.completionFlag === task.maxValue.toString()) return this.completion.completed;
        return this.completion.incomplete;
    }

}
