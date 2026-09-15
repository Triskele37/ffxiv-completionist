import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { DataService } from '@service/data/data-service';
import { TableService } from '@service/table/table.service';

import { logData } from './logData';

@Component({
    selector: 'com-copy-data-action',
    styleUrls: ['../action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        Tooltip,
    ],
    template: `
        @let tKey = resolveLinks
            ? 'APP.TABLE.GROUP_ACTION.COPY_RESOLVED_DATA'
            : 'APP.TABLE.GROUP_ACTION.COPY_RAW_DATA';

        <ng-icon
            name="matContentCopy"
            class="action"
            [pTooltip]="tKey | translate"
            tooltipPosition="top"
            (click)="logData(svcTable.group(), svcData, resolveLinks)"
        ></ng-icon>
    `
})
export class CopyDataActionComponent {
    svcData = inject(DataService);
    svcTable = inject(TableService);

    @Input({ required: true }) resolveLinks!: boolean;
    @Output() clicked = new EventEmitter<void>();

    logData = logData;
}
