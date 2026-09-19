import { Component, Input, inject, signal, effect } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { ReorderableRow } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';

import { CompleteCellComponent } from '@component/task-table/cell/complete/complete-cell.component';
import { EditCellComponent } from '@component/task-table/cell/edit/edit-cell.component';
import { DataCellComponent } from '@component/task-table/cell/data/data-cell.component';
import { ActionsCellComponent } from '@component/task-table/cell/actions/actions-cell.component';
import type { Task } from '@model/Task';
import { NoteService } from '@service/note/note.service';
import { SaveStoreService } from '@service/store/save-store.service';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-data-row',
    templateUrl: './data-row.component.html',
    styleUrls: ['./data-row.component.scss'],
    imports: [
        NgClass,
        ReorderableRow,
        Tooltip,

        CompleteCellComponent,
        EditCellComponent,
        DataCellComponent,
        ActionsCellComponent
    ]
})
export class DataRowComponent {
    svcNote = inject(NoteService);
    svcSave = inject(SaveStoreService);
    svcTable = inject(TableService);

    @Input({ required: true }) task!: Task;
    @Input({ required: true }) rowIndex!: number;

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

        this.note.set(this.svcNote.getNote(this.task));
    }

    onClick($event: MouseEvent): void {
        if(!this.parentHasClass($event, 'noSelect')) {
            const newSelectedState = !this.task.selected();

            const lastClickedIndex = this.svcTable.lastClickedRowIndex;
            if($event.shiftKey && lastClickedIndex !== undefined) {
                $event.preventDefault();

                this.svcTable.applyShiftSelection(this.rowIndex, newSelectedState);
            }

            this.svcTable.updateLastClickIndex(this.rowIndex);
            this.task.selected.set(newSelectedState);
        }
    }

    // Prevents text selection when using shift+click selection
    onRowMouseDown($event: MouseEvent) {
        if($event.shiftKey) $event.preventDefault();
    }

    parentHasClass(event: MouseEvent, className: string): boolean {
        return event.composedPath().some(
            (target) => (target as Element).classList?.contains(className)
        );
    }
}
