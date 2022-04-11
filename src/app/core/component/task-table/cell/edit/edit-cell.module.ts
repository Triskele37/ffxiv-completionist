import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { EditCellComponent } from './edit-cell.component';

@NgModule({
    declarations: [
        EditCellComponent
    ],
    imports: [
        CommonModule,
        InputTextareaModule
    ],
    exports: [
        EditCellComponent
    ]
})
export class EditCellModule {
}
