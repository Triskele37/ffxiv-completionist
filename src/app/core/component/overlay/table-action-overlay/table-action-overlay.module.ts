import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

import { AddTaskDialogModule } from '@admin/add-task-dialog/add-task-dialog.module';

import { TableActionOverlayComponent } from './table-action-overlay.component';

@NgModule({
    declarations: [
        TableActionOverlayComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,

        AddTaskDialogModule,
    ],
    exports: [
        TableActionOverlayComponent
    ]
})
export class TableActionOverlayModule {
}
