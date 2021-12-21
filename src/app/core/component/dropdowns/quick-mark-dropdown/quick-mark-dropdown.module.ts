import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@component/icon/icon.module';
import { QuickMarkDropdownComponent } from './quick-mark-dropdown.component';

@NgModule({
    declarations: [
        QuickMarkDropdownComponent
    ],
    imports: [
        CommonModule,

        IconModule
    ],
    exports: [
        QuickMarkDropdownComponent
    ]
})
export class QuickMarkDropdownModule {
}
