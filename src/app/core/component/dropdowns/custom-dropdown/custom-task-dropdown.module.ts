import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { CustomTaskDropdownComponent } from './custom-task-dropdown.component';

@NgModule({
    declarations: [
        CustomTaskDropdownComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        OverlayPanelModule
    ],
    exports: [
        CustomTaskDropdownComponent
    ]
})
export class CustomTaskDropdownModule {
}
