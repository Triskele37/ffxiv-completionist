import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Completion } from '@constant';
import { DataGroup } from '@domain/DataGroup';
import { Column } from '@domain/Column';
import { Task } from '@domain/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { SaveStoreService } from '@service/store/save-store.service';

@Component({
    selector: 'xiv-task-table',
    templateUrl: 'task-table.component.html',
    styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnChanges {
    @Input() columns: Column[];
    @Input() group: DataGroup;
    @Input() tasks: { [key: string]: Task };
    @Input() groupRows: boolean;

    debounceDrag: boolean;
    displayedTasks = 0;
    totalTasks = 0;

    hasTasks: boolean;
    uniqueValues: any;
    filteredTasks: { [key: string]: Task };
    filteredTasksArr: Task[];

    filters = {
        completion: {}
    };

    constructor(
        private svcConfig: ConfigStoreService,
        private svcSaveStore: SaveStoreService
    ) {
        this.filters.completion = this.svcConfig.get('table-filters');
    }

    ngOnChanges(changes: SimpleChanges) {
        const { columns, group, tasks } = changes;

        if(tasks) this.hasTasks = this._hasTasks;

        if(columns || group || tasks) {
            this.updateFilteredTasks();
        }
    }

    updateFilteredTasks() {
        this.filteredTasks = this._filteredTasks;
        this.filteredTasksArr = Object.values(this.filteredTasks);
        this.uniqueValues = this._uniqueValues;
    }

    onFilterChange(filters) {
        this.filters = filters;
        this.updateFilteredTasks();
    }

    onRowReorder($event: { dragIndex: number; dropIndex: number }): void {
        // Bail if nothing moved
        if($event.dragIndex === $event.dropIndex) return;

        // Grab original data
        const draggedTask = this.filteredTasksArr[$event.dragIndex];
        const customFlags = this.svcSaveStore.get('overall.custom');
        const customMeta = this.svcSaveStore.get('custom');
        const taskKeys = Object.keys(customMeta);
        const draggedKey = `x${draggedTask.id}`;

        // Insert the dragged task and remove its original
        if($event.dragIndex < $event.dropIndex) {
            taskKeys.splice($event.dropIndex + 1, 0, draggedKey);
            taskKeys.splice($event.dragIndex, 1);
        }
        else {
            taskKeys.splice($event.dropIndex, 0, draggedKey);
            taskKeys.splice($event.dragIndex + 1, 1);
        }

        // Reorder saved
        const newTasks = {}, newFlags = {}, newMeta = {};
        taskKeys.forEach((key) => {
            newTasks[key] = this.tasks[key];
            newFlags[key.substr(1)] = customFlags[key.substr(1)];
            newMeta[key] = customMeta[key];
        });

        // Assign re-ordered objects, save to file
        const firstId = Object.keys(this.tasks)[0];
        this.tasks[firstId]._parent.tasks = newTasks;
        this.svcSaveStore.set('overall.custom', newFlags);
        this.svcSaveStore.set('custom', newMeta);

        // Debounce dragging since its tied to file write
        this.debounceDrag = true;
        setTimeout(() => this.debounceDrag = false, 1000);
    }

    //#region----------------------------------------------------------- Computed
    get _hasTasks() {
        return this.tasks && Object.keys(this.tasks).length > 0;
    }

    get _uniqueValues() {
        const uniqueValues = {};

        // Grab unique values from the filtered task list
        for(const id in this.filteredTasks) {
            if(this.filteredTasks.hasOwnProperty(id)) {
                const task = this.filteredTasks[id];

                this.columns?.forEach(({ key }) => {
                    if(!uniqueValues[key]) uniqueValues[key] = [];

                    const value = !task[key] && task[key] !== 0 ? '' : task[key];
                    if(uniqueValues[key].indexOf(value) === -1) {
                        uniqueValues[key].push(value);
                    }
                });
            }
        }

        // Sort the unique values for pretty filter dropdowns
        this.columns?.forEach((column) => {
            if(!uniqueValues[column.key]) return;
            if(column.filterType === 'number') {
                uniqueValues[column.key].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
            }
            else {
                uniqueValues[column.key].sort();
            }
        });

        return uniqueValues;
    }

    get _filteredTasks() {
        const filtered = Object.assign({}, this.tasks);
        const hotwire = this.group.isNumericCompletion ? [] : [{ key: 'completion' }];
        hotwire.push(...this.columns);

        for(const { key } of hotwire) {
            const filter = this.filters[key];

            if(filter) {
                for(const id in filtered) {
                    if(filtered.hasOwnProperty(id)) {
                        let removeFromFiltered = false;

                        // Completion filters
                        if(key === 'completion') {
                            switch(this.tasks[id].completionFlag) {
                                case Completion.Y: removeFromFiltered = !filter.completed; break;
                                case Completion.N: removeFromFiltered = !filter.incomplete; break;
                                case Completion.X: removeFromFiltered = !filter.excluded; break;
                                default: removeFromFiltered = !filter.incomplete; break;
                            }
                        }
                        // Blank value search
                        else if(filter.value === 'Blank') {
                            removeFromFiltered = !!filtered[id][key];
                        }
                        // Column value fuzzy search filter
                        else {
                            let safeValue = filtered[id][key];
                            if(safeValue === null || safeValue === undefined) safeValue = '';

                            const columnValue = safeValue.toString().toLowerCase();
                            removeFromFiltered = !columnValue.includes(filter.value.toLowerCase());
                        }

                        if(removeFromFiltered) {
                            delete filtered[id];
                        }
                    }
                }
            }
        }

        this.displayedTasks = Object.keys(filtered).length;
        this.totalTasks = Object.keys(this.tasks).length;

        return filtered;
    }

    //#endregion
}
