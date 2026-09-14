import { Component, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { SortableColumn, SortIcon } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';

import { Completion } from '@constant';
import { NoteService } from '@service/note/note.service';
import { SaveStoreService } from '@service/store/save-store.service';
import { TableService } from '@service/table/table.service';

import { CompletionFilterComponent } from './completion-filter/completion-filter.component';
import { InputFilterComponent } from './input-filter/input-filter.component';
import { OptionFilterComponent } from './option-filter/option-filter.component';
import { ActionsGroupComponent } from './actions-group/actions-group.component';

@Component({
    selector: 'com-header-row',
    templateUrl: './header-row.component.html',
    styleUrls: ['./header-row.component.scss'],
    imports: [
        NgClass,
        SortIcon,
        SortableColumn,
        Tooltip,

        CompletionFilterComponent,
        InputFilterComponent,
        OptionFilterComponent,
        ActionsGroupComponent,
    ]
})
export class HeaderRowComponent {
    svcNote = inject(NoteService);
    svcSave = inject(SaveStoreService);
    svcTable = inject(TableService);

    Completion = Completion;

    note = signal<string | undefined>(undefined);

    constructor() {
        this.svcSave.updated$
            .pipe(takeUntilDestroyed())
            .subscribe(this.updateNote.bind(this));

        effect(() => {
            void this.svcTable.group();
            this.updateNote();
        });
    }

    updateNote(): void {
        if(this.svcTable.group().type === 'Note') {
            this.note.set(undefined);
            return;
        }

        this.note.set(this.svcNote.getNote(this.svcTable.group()));
    }

}
