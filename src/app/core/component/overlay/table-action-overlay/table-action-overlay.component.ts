import { Component, Input, OnChanges, OnDestroy, signal, SimpleChanges } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';

import { AddTaskDialogComponent } from '@admin/add-task-dialog/add-task-dialog.component';
import { DataService } from '@service/data/data-service';
import { DataGroup } from '@model/DataGroup';
import { getChild } from '@service/data/get/getChild';
import { Task } from '@model/Task';
import { BookmarkService } from '@service/bookmark/bookmark.service';
import { ConfigStoreService } from '@service/store/config-store.service';
import { TableService } from '@service/table/table.service';

import { Overlay } from '../Overlay';

@Component({
    selector: 'com-table-action-overlay',
    templateUrl: './table-action-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './table-action-overlay.component.scss'
    ],
    imports: [
        ButtonDirective,
        TranslatePipe,

        AddTaskDialogComponent
    ]
})
export class TableActionOverlayComponent extends Overlay implements OnChanges, OnDestroy {
    @Input({ required: true }) group!: DataGroup;
    @Input({ required: true }) tasks!: Task[];

    isBookmarked = signal(false);

    // Dev properties
    isDev = signal(false);
    isAddTaskVisible: boolean = false; // double bound, no signal

    constructor(
        private svcBookmark: BookmarkService,
        private svcData: DataService,
        public svcConfigStore: ConfigStoreService,
        public svcTable: TableService,
    ) {
        super();
        this.isDev.set(this.svcConfigStore.data?.isAdmin ?? false);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group) {
            this.isBookmarked.set(this.svcBookmark.isBookmarked(this.group));
        }
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    bookmarkGroup(): void {
        this.isBookmarked.set(this.svcBookmark.toggleBookmark(this.group));
    }

    /**
     * DEV FUNCTION
     * Prints the currently displayed table as tsv to console
     * */
    copyData(resolveLinks: boolean): void {
        if(!this.group.columns) {
            console.error('Error: No columns to copy data with');
            return;
        }

        // Retrieve column data and remove feature columns
        const columns = Object.values(this.group.columns);
        if(columns[0].key === 'contentLink') columns.shift();

        // Add column columns to final output
        const tasksOutput: any[] = [];
        tasksOutput.push(columns.map((column) => column.header).join('\t'));

        // Add each task to final output
        this.tasks.forEach((task) => {
            const taskOutput = columns
                .map((column) => {
                    if(column.link && resolveLinks) {
                        const resolvedLink = getChild(this.svcData.data, task[column.key]);
                        return resolvedLink?.name ?? task[column.key];
                    }
                    else {
                        return task[column.key];
                    }
                })
                .join('\t');

            tasksOutput.push(taskOutput);
        });

        console.log('tasks', this.tasks);
        console.log(tasksOutput.join('\n'));
    }

    /**
     * Placeholder TODO
     * Opens dialog to add task data directly to resources of the current table
     * */
    onAddTaskClick(): void {
        this.isAddTaskVisible = true;
    }

}
