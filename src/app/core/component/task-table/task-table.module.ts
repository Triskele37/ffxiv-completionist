import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { ChainDropdownModule } from '../dropdowns/chain-dropdown/chain-dropdown.module';
import { CustomTaskDropdownModule } from '../dropdowns/custom-dropdown/custom-task-dropdown.module';
import { QuickMarkDropdownModule } from '../dropdowns/quick-mark-dropdown/quick-mark-dropdown.module';
import { SelectDropdownModule } from '../dropdowns/select-dropdown/select-dropdown.module';

import { HeaderRowModule } from './row/header/header-row.module';
import { DataRowModule } from './row/data/data-row.module';
import { TaskTableComponent } from './task-table.component';

@NgModule({
    declarations: [
        TaskTableComponent,
    ],
    imports: [
        CommonModule,
        TableModule,
        TooltipModule,

        ChainDropdownModule,
        CustomTaskDropdownModule,
        QuickMarkDropdownModule,
        SelectDropdownModule,
        HeaderRowModule,
        DataRowModule,
    ],
    exports: [
        TaskTableComponent,
    ]
})
export class TaskTableModule {
}
