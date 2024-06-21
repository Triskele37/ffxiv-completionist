import { Component } from '@angular/core';

import { SettingsService } from '../settings.service';

@Component({
    selector: 'xiv-chain-settings',
    templateUrl: './chain-settings.component.html'
})
export class ChainSettingsComponent {
    constructor(public svcSettings: SettingsService) {
    }

    onChainingEnabledChange(): void {
        this.svcSettings.onChangeBoolSetting(this.svcSettings.settings.chainingEnabled);
        if(this.svcSettings.settings.chainingEnabled.value) {
            this.svcSettings.onChainingEnabled$.next();
        }
    }
}
