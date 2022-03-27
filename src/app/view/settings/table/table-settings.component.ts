import { Component, Input } from '@angular/core';

import { Settings } from '../settings';
import { SettingsComponent } from '../settings.component';

@Component({
    selector: 'xiv-table-settings',
    templateUrl: './table-settings.component.html'
})
export class TableSettingsComponent {
    @Input() settings: Settings;

    constructor(public parent: SettingsComponent) {
    }

}
