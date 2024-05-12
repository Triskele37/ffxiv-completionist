import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';

import { ContentLinkModule } from '@component/content-link/content-link.module';
import { ChainOverlayModule } from '@component/overlay/chain-overlay/chain-overlay.module';
import { CompleteCellModule } from '@component/task-table/cell/complete/complete-cell.module';
import { NumericCompleteCellModule } from '@component/task-table/cell/numeric-complete/numeric-complete-cell.module';

import { TaskSearchResultsComponent } from './task-search-results.component';

@NgModule({
    declarations: [
        TaskSearchResultsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        ButtonGroupModule,
        TableModule,

        ContentLinkModule,
        ChainOverlayModule,
        CompleteCellModule,
        NumericCompleteCellModule,
    ],
    exports: [
        TaskSearchResultsComponent
    ]
})
export class TaskSearchResultsModule {
}
