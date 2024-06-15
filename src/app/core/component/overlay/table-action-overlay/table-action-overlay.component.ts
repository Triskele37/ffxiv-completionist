import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { getChild } from '@model/DataGroup/children/getChild';
import { Task } from '@model/Task';
import { BookmarkService } from '@service/bookmark/bookmark.service';
import { ConfigStoreService } from '@service/store/config-store.service';

import { Overlay } from '../Overlay';

@Component({
    selector: 'xiv-table-action-overlay',
    templateUrl: './table-action-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './table-action-overlay.component.scss'
    ]
})
export class TableActionOverlayComponent extends Overlay implements OnInit, OnChanges, OnDestroy {
    @Input() group: DataGroup;
    @Input() tasks: Task[];

    private storeSub: Subscription;
    showAddTask: boolean;
    isAddTaskVisible: boolean = false;
    public isAdmin: boolean = false;

    isBookmarked: boolean;

    constructor(
        private svcBookmark: BookmarkService,
        public svcConfigStore: ConfigStoreService,
        private svcData: DataService,
    ) {
        super();
        this.showAddTask = this.svcConfigStore.data.isAdmin;
        this.isAdmin = this.svcConfigStore.data.isAdmin;
    }

    ngOnInit() {
        this.storeSub = this.svcConfigStore.updated$.subscribe((data) => {
            this.showAddTask = data.isAdmin;
            this.isAdmin = data.isAdmin;
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group) {
            this.isBookmarked = this.svcBookmark.isBookmarked(this.group);
        }
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.storeSub?.unsubscribe();
    }

    bookmarkGroup(): void {
        this.isBookmarked = this.svcBookmark.toggleBookmark(this.group);
    }

    // DEV FUNCTION
    copyData(): void {
        const tasksOutput = [];
        console.log('tasks', this.tasks);

        this.tasks.forEach((task) => {
            // const contentLink = task.contentLink?.replace(' > undefined', '') ?? '';
            // const unlock = getChild(this.svcData.data, task.unlock);

            const taskOutput = [
                // contentLink,
                task.name,
                task.category,
                getChild(this.svcData.data, task.source)?.name ?? task.source,
                task.patch
            ].join('\t');

            tasksOutput.push(taskOutput);
        });

        console.log(tasksOutput.join('\n'));
    }

    onAddTaskClick(): void {
        this.isAddTaskVisible = true;
    }

}
