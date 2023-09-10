import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Task } from '@model/Task';
import { BookmarkService } from '@service/bookmark/bookmark.service';

@Component({
    selector: 'xiv-bookmark-action',
    templateUrl: './bookmark-action.component.html',
    styleUrls: ['../action.scss']
})
export class BookmarkActionComponent implements OnChanges {
    @Input() task: Task;
    @Output() onClick = new EventEmitter<void>();

    isBookmarked: boolean;

    constructor(private svcBookmark: BookmarkService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.task) {
            this.isBookmarked = this.svcBookmark.isBookmarked(this.task);
        }
    }

    toggleBookmark(): void {
        this.isBookmarked = this.svcBookmark.toggleBookmark(this.task);
        this.onClick.emit();
    }
}
