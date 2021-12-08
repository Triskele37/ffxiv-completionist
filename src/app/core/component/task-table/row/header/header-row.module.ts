import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRowComponent } from './header-row.component';

@NgModule({
    declarations: [
        HeaderRowComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderRowComponent
    ]
})
export class HeaderRowModule {
}
