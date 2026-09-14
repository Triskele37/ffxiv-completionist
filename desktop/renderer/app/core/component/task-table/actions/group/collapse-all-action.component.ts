import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-collapse-all-action',
    styleUrls: ['../action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        Tooltip,
    ],
    template: `
        <ng-icon
            name="matFullscreenExit"
            class="action"
            [pTooltip]="'APP.SEARCH.COLLAPSE' | translate"
            tooltipPosition="top"
            (click)="svcTable.rowGroup.collapseAll()"
        ></ng-icon>
    `
})
export class CollapseAllActionComponent {
    svcTable = inject(TableService);
    @Output() clicked = new EventEmitter<void>();
}
