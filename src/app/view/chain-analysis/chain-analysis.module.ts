import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkModule } from '@component/content-link/content-link.module';
import { GroupSelectorModule } from '@component/group-selector/group-selector.module';

import { ChainAnalysisComponent } from './chain-analysis.component';
import { TableModule } from 'primeng/table';
import { CompleteCellModule } from '@component/task-table/cell/complete/complete-cell.module';
import { NumericCompleteCellModule } from '@component/task-table/cell/numeric-complete/numeric-complete-cell.module';

@NgModule({
    declarations: [
        ChainAnalysisComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ButtonModule,
        InputNumberModule,
        TooltipModule,

        ContentLinkModule,
        GroupSelectorModule,
        TableModule,
        CompleteCellModule,
        NumericCompleteCellModule,
    ],
    exports: [
        ChainAnalysisComponent
    ]
})
export class ChainAnalysisModule {
}
