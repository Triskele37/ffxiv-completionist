import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';

import { NumericCompleteCellComponent } from './numeric-complete-cell.component';

@NgModule({
    declarations: [
        NumericCompleteCellComponent
    ],
    imports: [
        FormsModule,
        InputNumberModule,
        TooltipModule
    ],
    exports: [
        NumericCompleteCellComponent
    ]
})
export class NumericCompleteCellModule {
}
