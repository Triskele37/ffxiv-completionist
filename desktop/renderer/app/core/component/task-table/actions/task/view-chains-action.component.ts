import { Component, Input, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';
import { ChainViewerService } from '@component/chain-viewer/chain-viewer.service';

@Component({
    selector: 'com-view-chains-action',
    styleUrls: ['../action.scss'],
    imports: [
        TranslatePipe,
        NgIcon,
        Tooltip,
    ],
    template: `
        <ng-icon
            name="matRemoveRedEye"
            class="action"
            [pTooltip]="'APP.TABLE.ROW_ACTION.VIEW_CHAINS' | translate"
            tooltipPosition="top"
            (click)="onOpenChainViewer()"
        ></ng-icon>
    `
})
export class ViewChainsActionComponent {
    private svcChainViewer = inject(ChainViewerService);

    @Input({ required: true }) task!: Task;

    onOpenChainViewer(): void {
        this.svcChainViewer.openChainViewer(this.task);
    }
}
