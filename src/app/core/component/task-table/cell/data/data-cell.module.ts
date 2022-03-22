import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

import { DataCellComponent } from './data-cell.component';

@NgModule({
    declarations: [
        DataCellComponent
    ],
    imports: [
        CommonModule,
        TooltipModule
    ],
    exports: [
        DataCellComponent
    ]
})
export class DataCellModule {
}
