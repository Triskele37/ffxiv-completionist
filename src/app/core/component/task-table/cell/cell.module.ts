import { NgModule } from '@angular/core';

import { CompleteCellModule } from './complete/complete-cell.module';
import { DataCellModule } from './data/data-cell.module';
import { EditCellModule } from './edit/edit-cell.module';
import { ActionsCellModule } from './actions/actions-cell.module';
import { NumericCompleteCellModule } from './numeric-complete/numeric-complete-cell.module';
import { LinkCellModule } from './link/link-cell.module';
import { LinksCellModule } from './links/links-cell.module';

@NgModule({
    imports: [
        CompleteCellModule,
        DataCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
        LinkCellModule,
        LinksCellModule,
    ],
    exports: [
        CompleteCellModule,
        DataCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
        LinkCellModule,
        LinksCellModule,
    ]
})
export class CellModule {
}
