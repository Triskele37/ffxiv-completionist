import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-expand-all-action',
    styleUrls: ['../action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        Tooltip,
    ],
    template: `
        <ng-icon
            name="matFullscreen"
            class="action"
            [pTooltip]="'APP.SEARCH.EXPAND' | translate"
            tooltipPosition="top"
            (click)="svcTable.expandAll()"
        ></ng-icon>
    `
})
export class ExpandAllActionComponent {
    svcTable = inject(TableService);
    @Output() clicked = new EventEmitter<void>();
}
