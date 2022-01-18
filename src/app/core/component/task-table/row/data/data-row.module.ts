import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { CellModule } from '../../cell/cell.module';
import { DataRowComponent } from './data-row.component';

@NgModule({
    declarations: [
        DataRowComponent
    ],
    imports: [
        CommonModule,

        CellModule,
        TableModule,
    ],
    exports: [
        DataRowComponent
    ]
})
export class DataRowModule {
}
