import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { AddTaskDialogComponent } from './add-task-dialog.component';

@NgModule({
    declarations: [
        AddTaskDialogComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        DialogModule,
    ],
    exports: [
        AddTaskDialogComponent
    ]
})
export class AddTaskDialogModule {
}
