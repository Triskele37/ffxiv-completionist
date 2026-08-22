import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ReorderableRowHandle } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';

@Component({
    selector: 'com-drag-action',
    templateUrl: './drag-action.component.html',
    styleUrls: ['../action.scss'],
    imports: [
        ReorderableRowHandle,
        Tooltip,
        TranslatePipe
    ],
})
export class DragActionComponent {
    @Input({ required: true }) rowIndex!: number;
}
