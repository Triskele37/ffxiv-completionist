import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';

import { ChainOverlayComponent } from './chain-overlay.component';

@NgModule({
    declarations: [
        ChainOverlayComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        OverlayPanelModule,
        TooltipModule
    ],
    exports: [
        ChainOverlayComponent
    ]
})
export class ChainOverlayModule {
}
