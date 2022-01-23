import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { TaskTableToolbarModule } from './toolbar/task-table-toolbar.module';
import { HeaderRowModule } from './row/header/header-row.module';
import { DataRowModule } from './row/data/data-row.module';
import { LinkCellModule } from './cell/link/link-cell.module';
import { TaskTableComponent } from './task-table.component';

@NgModule({
    declarations: [
        TaskTableComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        TableModule,
        TooltipModule,

        TaskTableToolbarModule,
        HeaderRowModule,
        DataRowModule,
        LinkCellModule,
    ],
    exports: [
        TaskTableComponent,
    ]
})
export class TaskTableModule {
}
