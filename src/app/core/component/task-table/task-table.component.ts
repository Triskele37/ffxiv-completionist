import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Completion } from '@constant';
import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { SaveStoreService } from '@service/store/save-store.service';

type UniqueValues = {
    [column: string]: string[];
};

@Component({
    selector: 'xiv-task-table',
    templateUrl: 'task-table.component.html',
    styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit, OnChanges {
    @Input() group: DataGroup;
    @Input() tasks: Task[];
    @Input() groupRows: boolean;

    debounceDrag: boolean;

    uniqueValues: UniqueValues;
    filteredTasks: Task[];

    filters = {
        completion: {}
    };

    constructor(
        private cdr: ChangeDetectorRef,
        private svcConfig: ConfigStoreService,
        private svcSaveStore: SaveStoreService
    ) {
        this.filters.completion = this.svcConfig.get('table-filters');
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        const { columns, group, tasks } = changes;

        if(columns || group || tasks) {
            this.updateFilteredTasks();
        }
    }

    updateFilteredTasks() {
        this.filteredTasks = this._filteredTasks;
        this.uniqueValues = this._uniqueValues;
        // this.cdr.detectChanges();
    }

    onFilterChange(filters) {
        this.filters = filters;
        this.updateFilteredTasks();
    }

    onRowReorder($event: { dragIndex: number; dropIndex: number }): void {
        // Bail if nothing moved
        if($event.dragIndex === $event.dropIndex) return;

        // Move the dragged task in the tasks array
        if($event.dragIndex < $event.dropIndex) {
            const task = this.tasks.splice($event.dragIndex, 1)[0];
            this.tasks.splice($event.dropIndex, 0, task);
        }
        else {
            const task = this.tasks.splice($event.dragIndex, 1)[0];
            this.tasks.splice($event.dropIndex, 0, task);
        }

        // Reorder saved
        const customFlags = this.svcSaveStore.get('overall.custom');
        const customMeta = this.svcSaveStore.get('custom');
        const newFlags = {}, newMeta = {};

        this.tasks.forEach((task) => {
            const key = `x${task.id}`;
            newFlags[task.id] = customFlags[task.id];
            newMeta[key] = customMeta[key];
        });

        // Assign re-ordered objects, save to file
        this.svcSaveStore.set('overall.custom', newFlags);
        this.svcSaveStore.set('custom', newMeta);

        // Debounce dragging since its tied to file write
        this.debounceDrag = true;
        setTimeout(() => this.debounceDrag = false, 1000);
    }

    //#region----------------------------------------------------------- Computed
    get hasTasks(): boolean {
        return !!this.tasks?.length;
    }

    get _uniqueValues(): UniqueValues {
        const unique: UniqueValues = {};

        // Grab unique values from the filtered task list
        this.group.columns?.forEach(({ key, ...column }) => {
            if(!column.filterable) return;
            if(!unique[key]) unique[key] = [];

            // Grab unique values
            this.filteredTasks.forEach((task) => {
                const value = task[key] ?? '';
                if(!unique[key].includes(value)) unique[key].push(value);
            });

            // Sort
            if(column.filterType === 'number') {
                unique[key].sort((a, b) =>
                    parseInt(a, 10) - parseInt(b, 10)
                );
            }
            else {
                unique[key].sort();
            }
        });

        return unique;
    }

    get _filteredTasks(): Task[] {
        let filtered = [...this.tasks];

        // Add completion as a column to non-numeric groups
        const columns = this.group.isNumericCompletion ? [] : [{ key: 'completion' }];
        columns.push(...this.group.columns);

        columns.forEach(({ key }) => {
            const filter = this.filters[key];
            if(!filter) return;

            filtered = filtered.filter((task) => {
                if(key === 'completion') {
                    // Completion filters
                    switch(task.completionFlag) {
                        case Completion.Y: return filter.completed;
                        case Completion.N: return filter.incomplete;
                        case Completion.X: return filter.excluded;
                        default: return filter.incomplete;
                    }
                }
                else {
                    // Column value fuzzy search filter
                    const columnValue = (task[key] ?? '').toString().toLowerCase();
                    return columnValue.includes(filter.value.toLowerCase());
                }
            });
        });

        return filtered;
    }

    //#endregion
}
