import { NgModule } from '@angular/core';
import { DataRowComponent } from './data-row.component';
import { CommonModule } from '@angular/common';

import { CellModule } from '../../cell/cell.module';

@NgModule({
    declarations: [
        DataRowComponent
    ],
    imports: [
        CommonModule,
        CellModule
    ],
    exports: [
        DataRowComponent
    ]
})
export class DataRowModule {
}
