import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryLineComponent } from './summary-line.component';

@NgModule({
    declarations: [
        SummaryLineComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SummaryLineComponent
    ]
})
export class SummaryLineModule {
}
