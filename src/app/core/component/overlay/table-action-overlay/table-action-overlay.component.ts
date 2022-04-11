import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { BookmarkService } from '@service/bookmark/bookmark.service';

@Component({
    selector: 'xiv-table-action-overlay',
    templateUrl: './table-action-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './table-action-overlay.component.scss'
    ]
})
export class TableActionOverlayComponent implements OnChanges {
    @Input() group: DataGroup;

    isVisible: boolean = false;
    isBookmarked: boolean;

    constructor(private svcBookmark: BookmarkService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group) {
            this.isBookmarked = this.svcBookmark.isBookmarked(this.group);
        }
    }

    onMouseEnter(): void {
        this.isVisible = true;
    }

    onMouseLeave(): void {
        this.isVisible = false;
    }

    bookmarkGroup(): void {
        this.isBookmarked = this.svcBookmark.toggleBookmark(this.group);
    }

}
