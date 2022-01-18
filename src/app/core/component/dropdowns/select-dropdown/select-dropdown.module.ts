import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { SelectDropdownComponent } from './select-dropdown.component';

@NgModule({
    declarations: [
        SelectDropdownComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        DividerModule,
        OverlayPanelModule,
    ],
    exports: [
        SelectDropdownComponent
    ]
})
export class SelectDropdownModule {
}
