import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { TableActionOverlayComponent } from './table-action-overlay.component';

@NgModule({
    declarations: [
        TableActionOverlayComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        OverlayPanelModule,
    ],
    exports: [
        TableActionOverlayComponent
    ]
})
export class TableActionOverlayModule {
}
