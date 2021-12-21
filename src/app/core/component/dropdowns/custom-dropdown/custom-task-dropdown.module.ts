import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IconModule } from '@component/icon/icon.module';
import { CustomTaskDropdownComponent } from './custom-task-dropdown.component';

@NgModule({
    declarations: [
        CustomTaskDropdownComponent
    ],
    imports: [
        CommonModule,
        FormsModule,

        IconModule
    ],
    exports: [
        CustomTaskDropdownComponent
    ]
})
export class CustomTaskDropdownModule {
}
