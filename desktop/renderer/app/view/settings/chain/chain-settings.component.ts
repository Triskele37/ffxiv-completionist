import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Checkbox } from 'primeng/checkbox';
import { InputNumber } from 'primeng/inputnumber';
import { Tooltip } from 'primeng/tooltip';

import { SettingsService } from '../settings.service';

@Component({
    selector: 'com-chain-settings',
    imports: [
        Checkbox,
        FormsModule,
        InputNumber,
        Tooltip,
        TranslatePipe
    ],
    templateUrl: './chain-settings.component.html'
})
export class ChainSettingsComponent {
    svcSettings = inject(SettingsService);

    onChainingEnabledChange(): void {
        this.svcSettings.onChangeBoolSetting(this.svcSettings.settings.chainingEnabled);
        if(this.svcSettings.settings.chainingEnabled.value) {
            this.svcSettings.onChainingEnabled$.next();
        }
    }
}
