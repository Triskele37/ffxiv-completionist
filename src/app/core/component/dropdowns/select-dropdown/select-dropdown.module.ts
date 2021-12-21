import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@component/icon/icon.module';
import { SelectDropdownComponent } from './select-dropdown.component';

@NgModule({
    declarations: [
        SelectDropdownComponent
    ],
    imports: [
        CommonModule,

        IconModule
    ],
    exports: [
        SelectDropdownComponent
    ]
})
export class SelectDropdownModule {
}
