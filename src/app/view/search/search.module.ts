import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { CompleteCellModule } from '@component/task-table/cell/complete/complete-cell.module';
import { NumericCompleteCellModule } from '@component/task-table/cell/numeric-complete/numeric-complete-cell.module';
import { LinkCellModule } from '@component/task-table/cell/link/link-cell.module';

import { ContentLinkModule } from '../../core/pipe/content-link.pipe';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,

        ButtonModule,
        InputTextModule,
        TableModule,
        TooltipModule,

        CompleteCellModule,
        NumericCompleteCellModule,
        LinkCellModule,
        ContentLinkModule,
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule {
}
