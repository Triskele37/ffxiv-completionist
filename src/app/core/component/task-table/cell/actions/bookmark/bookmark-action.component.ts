import type { OnChanges, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, Output, signal, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';
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
    @Output() clicked = new EventEmitter<void>();

    isBookmarked = signal(false);

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.task) {
            this.isBookmarked.set(this.svcBookmark.isBookmarked(this.task));
        }
    }

    toggleBookmark(): void {
        this.isBookmarked.set(this.svcBookmark.toggleBookmark(this.task));
        this.clicked.emit();
    }
}
