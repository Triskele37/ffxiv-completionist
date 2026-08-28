import type { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, signal, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';

import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
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
    ]
})
export class TableActionOverlayComponent extends Overlay implements OnChanges {
    private svcBookmark = inject(BookmarkService);
    private svcData = inject(DataService);
    svcConfigStore = inject(ConfigStoreService);
    svcTable = inject(TableService);

    @Input({ required: true }) group!: DataGroup;
    @Input({ required: true }) tasks!: Task[];

    isBookmarked = signal(false);

    // Dev properties
    isDev = signal(false);

    constructor() {
        super();
        this.isDev.set(this.svcConfigStore.data?.isAdmin ?? false);
    }

    ngOnChanges(changes: SimpleChanges<TableActionOverlayComponent>): void {
        if(changes.group) {
            this.isBookmarked.set(this.svcBookmark.isBookmarked(this.group));
        }
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
                        const resolvedLink = this.svcData.get.getChild(this.svcData.data, task[column.key]);
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

}
