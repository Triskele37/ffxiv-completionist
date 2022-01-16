import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuModule } from 'primeng/contextmenu';

import { SummaryLineModule } from '@component/summary-line/summary-line.module';
import { StatBarComponent } from './stat-bar.component';

@NgModule({
    declarations: [
        StatBarComponent
    ],
    imports: [
        CommonModule,
        ContextMenuModule,

        SummaryLineModule
    ],
    exports: [
        StatBarComponent
    ]
})
export class StatBarModule {
}
