import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickMarkDropdownComponent } from './quick-mark-dropdown.component';

@NgModule({
    declarations: [
        QuickMarkDropdownComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        QuickMarkDropdownComponent
    ]
})
export class QuickMarkDropdownModule {
}
