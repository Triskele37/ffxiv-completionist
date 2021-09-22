import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTaskDropdownComponent } from './custom-task-dropdown.component';

@NgModule({
    declarations: [
        CustomTaskDropdownComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CustomTaskDropdownComponent
    ]
})
export class CustomTaskDropdownModule {
}
