import {
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { FilterService } from '@service/filter/filter.service';
import { NavigationService } from '@service/navigation/navigation.service';
import { ConfigStoreService } from '@service/store/config-store.service';
import { SaveStoreService } from '@service/store/save-store.service';
import { getLinkedName } from '@util/getLinkedName';

import { DragEvent, UniqueValues } from './types';

@Component({
    selector: 'xiv-task-table',
    templateUrl: 'task-table.component.html',
    styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit, OnChanges, OnDestroy {
    @Input() group: DataGroup;
    @Input() tasks: Task[];

    debounceDrag: boolean;

    uniqueValues: UniqueValues;
    filteredTasks: Task[];

    _taskTable: Table;

    @ViewChild('taskTable', { static: false }) set taskTable(ref: Table) {
        if(!ref) return;
        this._taskTable = ref;
        this.observeVirtualWrapper();
        this.fixVirtualReorder();
    }

    constructor(
        private cdr: ChangeDetectorRef,
        private svcFilter: FilterService,
        private svcNavigation: NavigationService,
        private svcConfig: ConfigStoreService,
        private svcSaveStore: SaveStoreService
    ) {
    }

    //#region----------------------------------------------------------- Lifecycle
    ngOnInit() {
        this.svcFilter.onFilterUpdate$.subscribe(this.onFilterChange.bind(this));
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group || changes.tasks) {
            this.updateFilteredTasks();
            this.adjustVirtualHeader();
            this.scrollToSelectedTask();
        }
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    //#endregion

    scrollToSelectedTask(): void {
        if(this.svcNavigation.selectedTask) {
            const index = this.filteredTasks.findIndex(
                (t) => t.fullStorageKey === this.svcNavigation.selectedTask.fullStorageKey
            );

            if(index !== -1) {
                // Clear the selectedTask
                this.svcNavigation.selectedTask = null;

                // scrollTo cannot take place in this same tick
                setTimeout(() => this._taskTable.scrollToVirtualIndex(index), 1);
            }
        }
        else {
            this._taskTable?.scrollToVirtualIndex(0);
        }
    }

    //#region----------------------------------------------------------- Sort
    alphanumericRegex = new RegExp(/[^\w.]/g);

    sortData($event: SortEvent): void {
        $event.data.sort((taskA, taskB) => {
            for(const { field, order } of $event.multiSortMeta) {
                const a = taskA[field];
                const b = taskB[field];
                let result;

                if(!a || !b) result = a ? -1 : b ? 1 : 0;
                else if(typeof a === 'number' && typeof b === 'number') {
                    result = (a < b) ? -1 : (a > b) ? 1 : 0;
                }
                else {
                    result = this.compareStringOrLink(a, b);
                }

                if(result) return result * order;
            }
        });

        // Table doesn't re-render otherwise
        this.filteredTasks = [...$event.data];
    }

    compareStringOrLink(a: string | string[], b: string | string[]): number {
        // In case of an array of links, take the first
        let aVal = Array.isArray(a) ? a[0] : a;
        let bVal = Array.isArray(b) ? b[0] : b;

        // Attempt to get link text
        const linkA = getLinkedName(aVal, true);
        const linkB = getLinkedName(bVal, true);

        // non-matching means the values are links, make sure they're strings
        if(linkA !== aVal) aVal = linkA.toString();
        if(linkB !== bVal) bVal = linkB.toString();

        // Replace non-alphanumeric characters
        aVal = aVal.replace(this.alphanumericRegex, '');
        bVal = bVal.replace(this.alphanumericRegex, '');

        return aVal.localeCompare(bVal, undefined, { numeric: true });
    }

    //#endregion

    //#region----------------------------------------------------------- Filter
    onFilterChange(): void {
        this.updateFilteredTasks();
    }

    updateFilteredTasks(): void {
        this.filteredTasks = this.svcFilter.filterTasks(this.group, this.tasks);
        this.uniqueValues = this._uniqueValues;
        this.cdr.detectChanges();
    }

    get _uniqueValues(): UniqueValues {
        const unique: UniqueValues = {};

        // Grab unique values from the filtered task list
        this.group.columns?.forEach(({ key, ...column }) => {
            if(!column.filterable) return;
            if(!unique[key]) unique[key] = [];

            // Grab unique values
            this.filteredTasks.forEach((task) => {
                [].concat(task[key]).forEach((v) => {
                    const value = getLinkedName(v, column.link)?.toString() ?? '';
                    if(!unique[key].includes(value)) unique[key].push(value);
                });
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

    //#endregion

    //#region----------------------------------------------------------- Order
    onRowReorder($event: DragEvent): void {
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

    //#endregion

    //#region----------------------------------------------------------- Fix Virtual Headers
    observer: MutationObserver;

    observeVirtualWrapper(): void {
        if(!this._taskTable?.virtualScrollBody) return;

        const callback: MutationCallback = (mutations) => {
            const styleChanged = mutations.some(
                (m) => m.type === 'attributes' && m.attributeName === 'style'
            );

            if(styleChanged) this.adjustVirtualHeader();
        };

        this.observer?.disconnect();
        this.observer = new MutationObserver(callback);

        // Observe the virtual wrapper for style changes
        const config = { attributes: true, childList: false, subtree: false };
        const { nativeElement } = this._taskTable.virtualScrollBody._contentWrapper;
        this.observer.observe(nativeElement, config);
    }

    adjustVirtualHeader(): void {
        if(!this._taskTable?.virtualScrollBody) return;

        // Grab the translation from the virtual scroll container
        const { transform } = this._taskTable.virtualScrollBody._contentWrapper.nativeElement.style;
        if(!transform) return;

        const transformInt: number = parseInt(transform.match(/[0-9]+/)[0], 10);

        // Apply the inverse to each <th>
        const headers = this._taskTable.el.nativeElement.getElementsByTagName('th');
        for(const header of headers) {
            header.style.top = `${-transformInt}px`;
        }
    }

    //#endregion

    //#region----------------------------------------------------------- Fix Virtual Reorder
    fixVirtualReorder() {
        const og = this._taskTable.onRowDrop.bind(this._taskTable);

        this._taskTable.onRowDrop = (event, rowElement) => {
            this._taskTable.value = [...this._taskTable.value];
            og(event, rowElement);
        };
    }

    //#endregion

}
