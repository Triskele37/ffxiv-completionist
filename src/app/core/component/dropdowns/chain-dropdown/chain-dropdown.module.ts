import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';

import { ChainDropdownComponent } from './chain-dropdown.component';

@NgModule({
    declarations: [
        ChainDropdownComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        OverlayPanelModule,
        TooltipModule
    ],
    exports: [
        ChainDropdownComponent
    ]
})
export class ChainDropdownModule {
}
