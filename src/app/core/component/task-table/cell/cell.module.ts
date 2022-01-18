import { NgModule } from '@angular/core';

import { CompleteCellModule } from './complete/complete-cell.module';
import { EditCellModule } from './edit/edit-cell.module';
import { ActionsCellModule } from './actions/actions-cell.module';
import { NumericCompleteCellModule } from './numeric-complete/numeric-complete-cell.module';
import { LinkCellModule } from './link/link-cell.module';

@NgModule({
    imports: [
        CompleteCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
        LinkCellModule,
    ],
    exports: [
        CompleteCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
        LinkCellModule,
    ]
})
export class CellModule {
}
