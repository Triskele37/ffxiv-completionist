import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectDropdownComponent } from './select-dropdown.component';

@NgModule({
    declarations: [
        SelectDropdownComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SelectDropdownComponent
    ]
})
export class SelectDropdownModule {
}
