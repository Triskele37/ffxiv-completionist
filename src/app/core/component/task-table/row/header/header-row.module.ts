import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { HeaderRowComponent } from './header-row.component';

@NgModule({
    declarations: [
        HeaderRowComponent
    ],
    imports: [
        CommonModule,
        DropdownModule,
        InputTextModule,
        TableModule
    ],
    exports: [
        HeaderRowComponent
    ]
})
export class HeaderRowModule {
}
