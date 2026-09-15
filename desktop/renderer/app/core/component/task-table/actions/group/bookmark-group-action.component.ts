import { effect } from '@angular/core';
import { Component, EventEmitter, Output, signal, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { BookmarkService } from '@service/bookmark/bookmark.service';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-bookmark-group-action',
    styleUrls: ['../action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        Tooltip
    ],
    template: `
        @let tKey = isBookmarked()
            ? 'APP.TABLE.GROUP_ACTION.REM_BOOKMARK'
            : 'APP.TABLE.GROUP_ACTION.ADD_BOOKMARK';

        <ng-icon
            [name]="isBookmarked() ? 'matBookmarkRemove' : 'matBookmarkAdd'"
            class="action"
            [pTooltip]="tKey | translate"
            tooltipPosition="top"
            (click)="toggleBookmark()"
        ></ng-icon>
    `
})
export class BookmarkGroupActionComponent {
    private svcBookmark = inject(BookmarkService);
    private svcTable = inject(TableService);

    @Output() clicked = new EventEmitter<void>();

    isBookmarked = signal(false);

    constructor() {
        effect(() => {
            this.isBookmarked.set(this.svcBookmark.isBookmarked(this.svcTable.group()));
        });
    }

    toggleBookmark(): void {
        this.isBookmarked.set(this.svcBookmark.toggleBookmark(this.svcTable.group()));
        this.clicked.emit();
    }
}
