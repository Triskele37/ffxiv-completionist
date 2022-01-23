import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { SelectionOverlayComponent } from './selection-overlay.component';

@NgModule({
    declarations: [
        SelectionOverlayComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        DividerModule,
        OverlayPanelModule,
    ],
    exports: [
        SelectionOverlayComponent
    ]
})
export class SelectionOverlayModule {
}
