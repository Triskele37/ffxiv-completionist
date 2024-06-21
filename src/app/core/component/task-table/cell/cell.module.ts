import { NgModule } from '@angular/core';

import { ContentLinkModule } from '@component/content-link/content-link.module';

import { CompleteCellModule } from './complete/complete-cell.module';
import { DataCellModule } from './data/data-cell.module';
import { EditCellModule } from './edit/edit-cell.module';
import { ActionsCellModule } from './actions/actions-cell.module';
import { NumericCompleteCellModule } from './numeric-complete/numeric-complete-cell.module';

@NgModule({
    imports: [
        ContentLinkModule,

        CompleteCellModule,
        DataCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
    ],
    exports: [
        ContentLinkModule,

        CompleteCellModule,
        DataCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
    ]
})
export class CellModule {
}
