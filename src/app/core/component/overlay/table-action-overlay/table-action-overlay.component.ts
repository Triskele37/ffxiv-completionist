import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { BookmarkService } from '@service/bookmark/bookmark.service';

import { Overlay } from '../Overlay';

@Component({
    selector: 'xiv-table-action-overlay',
    templateUrl: './table-action-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './table-action-overlay.component.scss'
    ]
})
export class TableActionOverlayComponent extends Overlay implements OnChanges {
    @Input() group: DataGroup;

    isBookmarked: boolean;

    constructor(private svcBookmark: BookmarkService) {
        super();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.group) {
            this.isBookmarked = this.svcBookmark.isBookmarked(this.group);
        }
    }

    bookmarkGroup(): void {
        this.isBookmarked = this.svcBookmark.toggleBookmark(this.group);
    }

}
