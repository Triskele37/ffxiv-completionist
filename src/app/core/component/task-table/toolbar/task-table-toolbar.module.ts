import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';

import { ChainOverlayModule } from '@component/overlay/chain-overlay/chain-overlay.module';
import { CustomTaskOverlayModule } from '@component/overlay/custom-task-overlay/custom-task-overlay.module';
import { QuickMarkOverlayModule } from '@component/overlay/quick-mark-overlay/quick-mark-overlay.module';
import { SelectionOverlayModule } from '@component/overlay/selection-overlay/selection-overlay.module';
import { TableActionOverlayModule } from '@component/overlay/table-action-overlay/table-action-overlay.module';

import { TaskTableToolbarComponent } from './task-table-toolbar.component';

@NgModule({
    declarations: [
        TaskTableToolbarComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        TooltipModule,

        ChainOverlayModule,
        CustomTaskOverlayModule,
        QuickMarkOverlayModule,
        SelectionOverlayModule,
        TableActionOverlayModule
    ],
    exports: [
        TaskTableToolbarComponent
    ]
})
export class TaskTableToolbarModule {
}
