import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';

import { GradientPipeModule } from '@pipe/gradient.pipe';

import { PercentagePipe } from './percentage.pipe';
import { NumericCompleteCellComponent } from './numeric-complete-cell.component';

@NgModule({
    declarations: [
        NumericCompleteCellComponent,
        PercentagePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        InputNumberModule,
        TooltipModule,

        GradientPipeModule
    ],
    exports: [
        NumericCompleteCellComponent
    ]
})
export class NumericCompleteCellModule {
}
