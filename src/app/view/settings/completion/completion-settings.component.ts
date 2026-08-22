import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Checkbox } from 'primeng/checkbox';
import { Tooltip } from 'primeng/tooltip';

import { SettingsService } from "../settings.service";

@Component({
    selector: 'com-completion-settings',
    imports: [
        Checkbox,
        FormsModule,
        Tooltip,
        TranslatePipe
    ],
    templateUrl: './completion-settings.component.html'
})
export class CompletionSettingsComponent {
    constructor(public svcSettings: SettingsService) {
    }

}
