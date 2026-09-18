import type { OnChanges, SimpleChanges } from '@angular/core';
import { Component, inject, Input, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Popover, PopoverPassThroughOptions } from 'primeng/popover';

import { DataService } from '@service/data/data-service';
import type { LinkData } from '@service/data/types';
import type { Column } from '@model/Column';
import type { Task } from '@model/Task';
import { TableService } from '@service/table/table.service';

import { CellValueComponent } from './cell-value/cell-value.component';

/**
 * Container for cell-value
 * - Determines if value is single or contained in a View All overlay
 * - Generates tooltip for single values that overflow
 * */
@Component({
    selector: 'com-data-cell',
    templateUrl: './data-cell.component.html',
    styleUrls: ['./data-cell.component.scss'],
    imports: [
        ButtonDirective,
        Popover,
        TranslatePipe,

        CellValueComponent
    ]
})
export class DataCellComponent implements OnChanges {
    private svcData = inject(DataService);
    svcTable = inject(TableService);

    @Input({ required: true }) column!: Column;
    @Input({ required: true }) task!: Task;
    @Input() value?: string;

    tooltip: string | undefined;

    // Compiled links for the task at column
    rows: LinkData[][] = [];

    isOverlayLocked: boolean = false;
    @ViewChild('linkPopover') linkPopover: Popover | undefined;

    pt: PopoverPassThroughOptions = {
        root: {
            onmouseleave: () => this.onOverlayLeave()
        }
    };

    ngOnChanges(changes: SimpleChanges<DataCellComponent>): void {
        if(changes.task || changes.column || changes.value) {
            this.compileLinks();
        }
    }

    //#region------------------------------------------------------- Events
    onMultiLinkLeave(): void {
        if(this.isOverlayLocked) return;
        this.linkPopover?.hide();
    }

    onOverlayLeave(): void {
        this.isOverlayLocked = false;
        this.linkPopover?.hide();
    }

    onLockOverlayClick(): void {
        this.isOverlayLocked = !this.isOverlayLocked;
    }

    //#endregion

    getCellValues() {
        const values = [].concat(this.task?.[this.column.key] ?? this.value);
        return this.column.oneLineTextList ? [values.join(', ')] : values;
    }

    compileLinks(): void {
        if(this.column.mixedLink) {
            if(this.task._mixedType === 'Task') {
                this.rows = [[{ value: this.task, type: 'Task' }]];
            }
            else if(this.task._mixedType === 'Group') {
                this.rows = [[{
                    value: this.task._parent.subGroups?.get(this.task.storageKey) ?? this.task._parent,
                    type: 'Group'
                }]];
            }
        }
        else if(this.column.taskLink) {
            this.rows = [[{ value: this.task, type: 'Task' }]];
        }
        else if(this.column.groupLink) {
            this.rows = [[{ value: this.task._parent, type: 'Group' }]];
        }
        else {
            this.rows = this.getCellValues().map((v) => this.svcData.getLinkedPieces(v, this.column.link));
            this.rows = this.rows.filter((row) => !!row.filter((ld) => ld.value).length);
        }
    }

}
