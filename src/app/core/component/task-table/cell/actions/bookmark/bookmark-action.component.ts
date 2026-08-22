import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { Task } from '@model/Task';
import { BookmarkService } from '@service/bookmark/bookmark.service';

@Component({
    selector: 'com-bookmark-action',
    templateUrl: './bookmark-action.component.html',
    styleUrls: ['../action.scss'],
    imports: [
        Tooltip,
        TranslatePipe
    ],
})
export class BookmarkActionComponent implements OnChanges {
    private svcBookmark = inject(BookmarkService);

    @Input({ required: true }) task!: Task;
    @Output() onClick = new EventEmitter<void>();

    isBookmarked = signal(false);

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.task) {
            this.isBookmarked.set(this.svcBookmark.isBookmarked(this.task));
        }
    }

    toggleBookmark(): void {
        this.isBookmarked.set(this.svcBookmark.toggleBookmark(this.task));
        this.onClick.emit();
    }
}
