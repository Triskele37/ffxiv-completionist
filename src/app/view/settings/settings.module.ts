import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

import { ChainOverlayModule } from '@component/overlay/chain-overlay/chain-overlay.module';

import { CharacterSettingsComponent } from './character/character-settings.component';
import { ThemeSettingsComponent } from './theme/theme-settings.component';
import { CompletionSettingsComponent } from './completion/completion-settings.component';
import { ChainSettingsComponent } from './chain/chain-settings.component';
import { SettingsComponent } from './settings.component';

@NgModule({
    declarations: [
        CharacterSettingsComponent,
        ThemeSettingsComponent,
        CompletionSettingsComponent,
        ChainSettingsComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,

        ButtonModule,
        ButtonGroupModule,
        CheckboxModule,
        ColorPickerModule,
        DropdownModule,
        InputNumberModule,
        InputTextModule,
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
