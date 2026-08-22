import { Component, Input, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReorderableRow } from 'primeng/table';

import { CompleteCellComponent } from '@component/task-table/cell/complete/complete-cell.component';
import { EditCellComponent } from '@component/task-table/cell/edit/edit-cell.component';
import { DataCellComponent } from '@component/task-table/cell/data/data-cell.component';
import { ActionsCellComponent } from '@component/task-table/cell/actions/actions-cell.component';
import { Task } from '@model/Task';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-data-row',
    templateUrl: './data-row.component.html',
    styleUrls: ['./data-row.component.scss'],
    imports: [
        NgClass,
        ReorderableRow,

        CompleteCellComponent,
        EditCellComponent,
        DataCellComponent,
        ActionsCellComponent
    ]
})
export class DataRowComponent {
    svcTable = inject(TableService);

    @Input({ required: true }) task!: Task;
    @Input({ required: true }) rowIndex!: number;

    onClick($event: MouseEvent): void {
        if(!this.parentHasClass($event.target as Element, 'noSelect')) {
            const newSelectedState = !this.task.selected();

            const lastClickedIndex = this.svcTable.selection.lastClickedRowIndex;
            if($event.shiftKey && lastClickedIndex !== undefined) {
                $event.preventDefault();

                this.svcTable.selection.applyShiftSelection(this.rowIndex, newSelectedState);
            }

            this.svcTable.selection.updateLastClickIndex(this.rowIndex);
            this.task.selected.set(newSelectedState);
        }
    }

    // Prevents text selection when using shift+click selection
    onRowMouseDown($event: MouseEvent) {
        if($event.shiftKey) $event.preventDefault();
    }

    //NOTE: parent chain is broken if element is inside an @if or ng-container
    parentHasClass(element: Element, className: string): boolean {
        if(element.classList?.contains(className)) return true;
        if(!element.parentNode) return false;
        return this.parentHasClass(element.parentNode as Element, className);
    }
}
