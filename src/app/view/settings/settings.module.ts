import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

import { ChainOverlayModule } from '@component/overlay/chain-overlay/chain-overlay.module';

import { SettingsComponent } from './settings.component';

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule,
        DropdownModule,
        InputNumberModule,
        TabViewModule,
        TooltipModule,

        ChainOverlayModule
    ],
    exports: [
        SettingsComponent
    ]
})
export class SettingsModule {
}
