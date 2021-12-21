import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@component/icon/icon.module';
import { HeaderRowComponent } from './header-row.component';

@NgModule({
    declarations: [
        HeaderRowComponent
    ],
    imports: [
        CommonModule,

        IconModule
    ],
    exports: [
        HeaderRowComponent
    ]
})
export class HeaderRowModule {
}
