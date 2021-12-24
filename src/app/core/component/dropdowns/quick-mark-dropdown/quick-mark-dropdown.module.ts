import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { QuickMarkDropdownComponent } from './quick-mark-dropdown.component';

@NgModule({
    declarations: [
        QuickMarkDropdownComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        OverlayPanelModule
    ],
    exports: [
        QuickMarkDropdownComponent
    ]
})
export class QuickMarkDropdownModule {
}
