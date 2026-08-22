import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { NavigationService } from '@service/navigation/navigation.service';
import { SaveStoreService } from '@service/store/save-store.service';
import { TableService } from '@service/table/table.service';

import { TaskTableToolbarComponent } from './toolbar/task-table-toolbar.component';
import { HeaderRowComponent } from './row/header/header-row.component';
import { DataRowComponent } from './row/data/data-row.component';
import { GroupRowComponent } from './row/group/group-row.component';

@Component({
    selector: 'com-task-table',
    templateUrl: 'task-table.component.html',
    styleUrls: ['./task-table.component.scss'],
    imports: [
        Table,

        TaskTableToolbarComponent,
        HeaderRowComponent,
        DataRowComponent,
        GroupRowComponent,
    ]
})
export class TaskTableComponent implements OnInit, OnChanges {
    @Input({ required: true }) private set group(value: DataGroup) {
        this.svcTable.property.setGroup(value);
    };

    @Input({ required: true }) private set tasks(value: Task[]) {
        this.svcTable.property.setTasks(value);
    };

    @Input({ required: true }) private set groupRows(value: boolean) {
        this.svcTable.rowGroup.groupRows = value;
    };

    @Input() toolbarPre?: TemplateRef<any>;

    _taskTable: Table | undefined;

    readonly rowHeight: number = 36;
    targetTaskScrollTo: string = '';
    boundVirtualOnScroll = this.onVirtualScrollerScroll.bind(this);

    constructor(
        private svcNavigation: NavigationService,
        private svcSaveStore: SaveStoreService,
        public svcTable: TableService,
    ) {
    }

    @ViewChild('taskTable', { static: false }) set taskTable(ref: Table) {
        if(!ref) return;
        this._taskTable = ref;

        this.fixVirtualReorder();

        // Attempt to remove any outstanding scroll listeners if ref changes
        const og = this._taskTable.onDestroy;
        this._taskTable.onDestroy = () => {
            try {
                this.removeScrollListener();
                og();
            }
            catch(e) {}
        };
    }

    //#region----------------------------------------------------------- Lifecycle
    ngOnInit() {
        this.svcTable.filter.onFilterUpdate$.subscribe(this.onFilterChange.bind(this));
        this.svcSaveStore.updated$.subscribe(this.onFilterChange.bind(this));
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group || changes.tasks) {
            this.scrollToSelectedTask();
        }
    }

    onFilterChange(): void {
        // Cache the current scrollTop for scrollback
        if(!this.targetTaskScrollTo) this.setTargetScrollTo();
        this.svcTable.filter.updateFilteredTasks();
    }

    //#endregion

    //#region----------------------------------------------------------- Scroll
    private get scrollContainer(): HTMLDivElement | null {
        return this._taskTable?.el.nativeElement.querySelector('.p-virtualscroller');
    }

    scrollToSelectedTask(): void {
        if(!this.svcTable.tasks().length) return;

        const selectedTask = this.svcNavigation.selectedTask();
        if(selectedTask) {
            // Find the index of the selected task
            const index = this.svcTable.tasks().findIndex(
                (t) => t.fullStorageKey === selectedTask.fullStorageKey
            );

            if(index > -1) {
                // Clear the svcNav's selectedTask
                this.targetTaskScrollTo = selectedTask.fullStorageKey;
                this.svcNavigation.selectedTask.set(null);

                // Initiate a scroll to the task
                const noReally = setInterval(() => {
                    if(!this.scrollContainer) return;

                    clearInterval(noReally);
                    this.addScrollListener();
                    this.triggerScrollListener();
                }, 100);
            }
        }
        else {
            this._taskTable?.scrollToVirtualIndex(0);
        }
    }

    /**
     * Shenanigans to brute force prime table to scroll right
     * - PrimeNg Virtual stops trying to scroll at a random point before the target,
     *   this keeps firing scrolls at it until it gets there, or the safety net is hit
     * - Safety net protects from this keeping scroll at the bottom when a filter shortens
     *   the total scrollHeight and items near the bottom of the table
     * - Safety net needs retry because this can run before Prime figures out
     *   the actual full scrollHeight
     * */
    onVirtualScrollerScroll(event: Event) {
        const target = event.target as HTMLElement;

        // Do not attempt brute'ing before prime figures out the new scrollHeight
        if(target.scrollHeight < this.svcTable.tasks().length * this.rowHeight) {
            return;
        }

        const targetScrollTop = this.getTargetScrollTop(target);
        if(target.scrollTop === targetScrollTop) {
            this.removeScrollListener();
        }
        else {
            // Necessary because prime is also doing stuff here
            setTimeout(() => {
                this.scrollContainer!.scrollTo({ top: targetScrollTop });
            });
        }

        // Safety net (needs to be last or table scrolls to zero)
        const maxScroll = target.scrollHeight - target.clientHeight;
        if(target.clientHeight > 0 && target.scrollTop === maxScroll) {
            this.removeScrollListener();
        }
    }

    addScrollListener(): void {
        this.scrollContainer?.addEventListener('scroll', this.boundVirtualOnScroll);
    }

    removeScrollListener(): void {
        this.targetTaskScrollTo = '';
        this.scrollContainer?.removeEventListener('scroll', this.boundVirtualOnScroll);
    }

    triggerScrollListener(): void {
        this.scrollContainer?.scrollTo({ top: this.getTargetScrollTop() });
        if(!this.scrollContainer) console.error('Error: Could not scroll container, null reference');
    }

    getTargetScrollTop(target?: HTMLElement): number {
        if(!this.targetTaskScrollTo) return 0;

        const targetIndex = this.svcTable.tasks().findIndex(
            (t) => t.fullStorageKey === this.targetTaskScrollTo
        );

        if(target?.clientHeight) {
            // Give the scroll handler safety net some space
            const indexPadding = Math.ceil(target.clientHeight / this.rowHeight) - 3;
            const maxIndex = (this.svcTable.tasks().length - 1) - indexPadding;
            if(targetIndex > maxIndex) return maxIndex * this.rowHeight;
        }

        return targetIndex * this.rowHeight;
    }

    setTargetScrollTo() {
        const currentScrollTop = this.scrollContainer?.scrollTop;
        if(!currentScrollTop) return;

        const targetIndex = Math.ceil(currentScrollTop / this.rowHeight);
        this.targetTaskScrollTo = this.svcTable.tasks()[targetIndex].fullStorageKey;
        this.addScrollListener();
    }

    //#endregion

    //#region----------------------------------------------------------- Fix Virtual Reorder
    fixVirtualReorder() {
        if(!this._taskTable) {
            console.error('Error: Unable to fix virtual reorder, table nullish');
            return;
        }

        const og = this._taskTable.onRowDrop.bind(this._taskTable);

        this._taskTable.onRowDrop = (event, rowElement) => {
            this._taskTable!.value = [...this._taskTable!.value];
            og(event, rowElement);
        };
    }

    //#endregion

}
