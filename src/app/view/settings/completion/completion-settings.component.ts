import { Component, Input } from '@angular/core';

import { Settings } from '../settings';
import { SettingsComponent } from '../settings.component';

@Component({
    selector: 'xiv-completion-settings',
    templateUrl: './completion-settings.component.html'
})
export class CompletionSettingsComponent {
    @Input() settings: Settings;

    constructor(public parent: SettingsComponent) {
    }

}
