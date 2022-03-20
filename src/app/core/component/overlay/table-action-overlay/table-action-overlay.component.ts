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

    onMouseEnter(): void {
        this.isVisible = true;
    }

    onMouseLeave(): void {
        this.isVisible = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.isBookmarked = this.svcBookmark.isBookmarked(this.group);
    }

    bookmarkGroup(): void {
        this.isBookmarked = this.svcBookmark.toggleBookmark(this.group);
    }

}
