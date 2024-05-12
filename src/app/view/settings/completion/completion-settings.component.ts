import { Component } from '@angular/core';

import { SettingsService } from "../settings.service";

@Component({
    selector: 'xiv-completion-settings',
    templateUrl: './completion-settings.component.html'
})
export class CompletionSettingsComponent {
    constructor(public svcSettings: SettingsService) {
    }

}
