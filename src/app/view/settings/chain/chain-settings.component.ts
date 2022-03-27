import { Component, Input } from '@angular/core';

import { Settings } from '../settings';
import { SettingsComponent } from '../settings.component';

@Component({
    selector: 'xiv-chain-settings',
    templateUrl: './chain-settings.component.html'
})
export class ChainSettingsComponent {
    @Input() settings: Settings;

    constructor(public parent: SettingsComponent) {
    }

}
