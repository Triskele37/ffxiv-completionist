import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { QuickMarkOverlayComponent } from './quick-mark-overlay.component';

@NgModule({
    declarations: [
        QuickMarkOverlayComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        OverlayPanelModule
    ],
    exports: [
        QuickMarkOverlayComponent
    ]
})
export class QuickMarkOverlayModule {
}
