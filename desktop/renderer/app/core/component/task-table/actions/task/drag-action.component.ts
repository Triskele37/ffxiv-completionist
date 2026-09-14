import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ReorderableRowHandle } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';

@Component({
    selector: 'com-drag-action',
    styleUrls: ['../action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        Tooltip,
        ReorderableRowHandle
    ],
    template: `
        <ng-icon
            pReorderableRowHandle
            name="matDragHandle"
            class="action"
            tooltipPosition="top"
            [pTooltip]="'APP.TABLE.ROW_ACTION.REORDER' | translate"
        ></ng-icon>
    `
})
export class DragActionComponent {
    @Input({ required: true }) rowIndex!: number;
}
