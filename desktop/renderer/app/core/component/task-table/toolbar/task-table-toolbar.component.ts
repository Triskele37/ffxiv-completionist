import type { TemplateRef } from '@angular/core';
import { Component, Input, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonGroup } from 'primeng/buttongroup';
import { Tooltip } from 'primeng/tooltip';

import { ChainOverlayComponent } from '@component/overlay/chain-overlay/chain-overlay.component';
import { CustomContentOverlayComponent } from '@component/overlay/custom-content-overlay/custom-content-overlay.component';
import { MergeOverlayComponent } from '@component/overlay/merge-overlay/merge-overlay.component';
import { QuickMarkOverlayComponent } from '@component/overlay/quick-mark-overlay/quick-mark-overlay.component';
import { SelectionOverlayComponent } from '@component/overlay/selection-overlay/selection-overlay.component';
import { TableActionOverlayComponent } from '@component/overlay/table-action-overlay/table-action-overlay.component';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-task-table-toolbar',
    templateUrl: './task-table-toolbar.component.html',
    styleUrls: ['./task-table-toolbar.component.scss'],
    imports: [
        NgTemplateOutlet,
        ButtonGroup,
        Tooltip,
        TranslatePipe,

        ChainOverlayComponent,
        CustomContentOverlayComponent,
        MergeOverlayComponent,
        QuickMarkOverlayComponent,
        SelectionOverlayComponent,
        TableActionOverlayComponent,
    ]
})
export class TaskTableToolbarComponent {
    svcTable = inject(TableService);

    @Input() templatePre?: TemplateRef<any>;

    onDataChange(): void {
        this.svcTable.filter.updateFilteredTasks();
    }
}
