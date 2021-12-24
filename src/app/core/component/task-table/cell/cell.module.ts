import { NgModule } from '@angular/core';

import { CompleteCellModule } from './complete/complete-cell.module';
import { EditCellModule } from './edit/edit-cell.module';
import { ActionsCellModule } from './actions/actions-cell.module';
import { NumericCompleteCellModule } from './numeric-complete/numeric-complete-cell.module';

@NgModule({
    imports: [
        CompleteCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
    ],
    exports: [
        CompleteCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
    ]
})
export class CellModule {
}
