import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import { DataGroup } from '../../../domain/DataGroup';
import { Task } from '../../../domain/Task';

import { StoreService } from '../../services/store/store.service';

@Component({
    selector: 'xiv-task-table',
    templateUrl: 'task-table.component.html',
    styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnChanges {
    @Input() columnConfig: any[];
    @Input() group: DataGroup;
    @Input() tasks: { [key: string]: Task };
    @ViewChild('taskTable') taskTableRef: ElementRef;

    displayedTasks = 0;
    totalTasks = 0;
    rerenderKey = 0;

    hasTasks: boolean;
    uniqueValues: any;
    filteredTasks: { [key: string]: Task };

    filters = {
        completion: {}
    };

    constructor(private svcStore: StoreService) {
        this.filters.completion = this.svcStore.eStore.get('table-filters');
    }

    ngOnChanges(changes: SimpleChanges) {
        const { columnConfig, group, tasks } = changes;

        if(group) {
            const isValidGroupChange = group.currentValue && group.previousValue.name !== group.currentValue.name;

            if(isValidGroupChange && this.taskTableRef) {
                this.taskTableRef.nativeElement.scrollTop = 0;
            }
        }

        if(tasks) this.hasTasks = this._hasTasks;

        if(columnConfig || group || tasks) {
            this.uniqueValues = this._uniqueValues;
            this.filteredTasks = this._filteredTasks;
        }
    }

    onFilterChange(filters) {
        this.filters = filters;
    }

    onSelectChange() {
        this.rerenderKey++;
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

                this.columnConfig.forEach(({ key }) => {
                    if(!uniqueValues[key]) uniqueValues[key] = [];

                    const value = !task[key] && task[key] !== 0 ? '' : task[key];
                    if(uniqueValues[key].indexOf(value) === -1) {
                        uniqueValues[key].push(value);
                    }
                });
            }
        }

        // Sort the unique values for pretty filter dropdowns
        this.columnConfig.forEach((column) => {
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
        hotwire.push(...this.columnConfig);

        for(const { key } of hotwire) {
            const filter = this.filters[key];

            if(filter) {
                for(const id in filtered) {
                    if(filtered.hasOwnProperty(id)) {
                        let removeFromFiltered = false;

                        // Completion filters
                        if(key === 'completion') {
                            switch(this.tasks[id].completionFlag) {
                                case 'Y': removeFromFiltered = !filter.completed; break;
                                case 'N': removeFromFiltered = !filter.incomplete; break;
                                case 'X': removeFromFiltered = !filter.excluded; break;
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
