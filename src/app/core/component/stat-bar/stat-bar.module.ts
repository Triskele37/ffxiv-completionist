import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryLineModule } from '@component/summary-line/summary-line.module';
import { StatBarComponent } from './stat-bar.component';

@NgModule({
    declarations: [
        StatBarComponent
    ],
    imports: [
        CommonModule,

        SummaryLineModule
    ],
    exports: [
        StatBarComponent
    ]
})
export class StatBarModule {
}
