import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChainDropdownModule } from '@component/dropdowns/chain-dropdown/chain-dropdown.module';

import { SettingsComponent } from './settings.component';

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        CommonModule,

        ChainDropdownModule
    ],
    exports: [
        SettingsComponent
    ]
})
export class SettingsModule {
}
