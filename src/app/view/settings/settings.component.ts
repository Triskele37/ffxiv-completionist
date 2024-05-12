import { Component, OnInit } from '@angular/core';

import { SettingsService } from './settings.service';

@Component({
    selector: 'xiv-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    constructor(
        private svcSettings: SettingsService
    ) {
    }

    ngOnInit(): void {
        this.svcSettings.init();
    }
}
