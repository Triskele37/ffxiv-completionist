import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

import { ChainOverlayModule } from '@component/overlay/chain-overlay/chain-overlay.module';

import { CharacterSettingsComponent } from './character/character-settings.component';
import { TableSettingsComponent } from './table/table-settings.component';
import { ChainSettingsComponent } from './chain/chain-settings.component';
import { SettingsComponent } from './settings.component';

@NgModule({
    declarations: [
        CharacterSettingsComponent,
        TableSettingsComponent,
        ChainSettingsComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
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
