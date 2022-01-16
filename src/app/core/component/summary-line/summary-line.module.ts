import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

import { SummaryLineComponent } from './summary-line.component';

@NgModule({
    declarations: [
        SummaryLineComponent
    ],
    imports: [
        CommonModule,
        TooltipModule
    ],
    exports: [
        SummaryLineComponent
    ]
})
export class SummaryLineModule {
}
