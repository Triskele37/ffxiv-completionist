import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { SelectDropdownComponent } from './select-dropdown.component';

@NgModule({
    declarations: [
        SelectDropdownComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        OverlayPanelModule,
    ],
    exports: [
        SelectDropdownComponent
    ]
})
export class SelectDropdownModule {
}
