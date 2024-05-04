import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataGroup } from '@model/DataGroup';
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

    private storeSub: Subscription;
    showAddTask: boolean;
    isAddTaskVisible = false;

    isBookmarked: boolean;

    constructor(
        private svcBookmark: BookmarkService,
        public svcConfigStore: ConfigStoreService,
    ) {
        super();
    }

    ngOnInit() {
        this.storeSub = this.svcConfigStore.updated$.subscribe((data) => {
            this.showAddTask = data.isAdmin;
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

    onAddTaskClick(): void {
        this.isAddTaskVisible = true;
    }

}
