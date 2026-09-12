import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';

import { CharacterSettingsComponent } from './character/character-settings.component';
import { CompletionSettingsComponent } from './completion/completion-settings.component';
import { ChainSettingsComponent } from './chain/chain-settings.component';
import { ThemeSettingsComponent } from './theme/theme-settings.component';
import { SettingsService } from './settings.service';

@Component({
    selector: 'com-settings',
    templateUrl: './settings.component.html',
    imports: [
        Tabs,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        TranslatePipe,

        CharacterSettingsComponent,
        CompletionSettingsComponent,
        ChainSettingsComponent,
        ThemeSettingsComponent
    ],
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    private svcSettings = inject(SettingsService);
}
