import { NgModule } from '@angular/core';

import { CompleteCellComponent } from './complete/complete-cell.component';
import { EditCellComponent } from './edit/edit-cell.component';
import { ExternalCellComponent } from './external/external-cell.component';
import { NumericCompleteCellComponent } from './numeric-complete/numeric-complete-cell.component';

@NgModule({
    declarations: [
        CompleteCellComponent,
        EditCellComponent,
        ExternalCellComponent,
        NumericCompleteCellComponent,
    ],
    exports: [
        CompleteCellComponent,
        EditCellComponent,
        ExternalCellComponent,
        NumericCompleteCellComponent,
    ]
})
export class CellModule {
}
