import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuModule } from 'primeng/contextmenu';

import { SummaryLineModule } from '@component/summary-line/summary-line.module';
import { SummaryHeaderComponent } from './summary-header.component';

@NgModule({
    declarations: [
        SummaryHeaderComponent
    ],
    imports: [
        CommonModule,
        ContextMenuModule,

        SummaryLineModule
    ],
    exports: [
        SummaryHeaderComponent
    ]
})
export class SummaryHeaderModule {
}
