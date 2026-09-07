import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ReorderableRowHandle } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';

@Component({
    selector: 'com-drag-action',
    templateUrl: './drag-action.component.html',
    styleUrls: ['../action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        Tooltip,
        ReorderableRowHandle
    ],
})
export class DragActionComponent {
    @Input({ required: true }) rowIndex!: number;
}
