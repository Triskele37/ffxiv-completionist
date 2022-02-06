import { Component, Input, OnInit } from '@angular/core';

import { ThemeService } from '@service/theme/theme.service';

import { Settings } from '../settings';
import { SettingsComponent } from '../settings.component';

@Component({
    selector: 'xiv-theme-settings',
    templateUrl: './theme-settings.component.html'
})
export class ThemeSettingsComponent implements OnInit {
    @Input() settings: Settings;

    primaryColor: string;
    fontFamily: string;

    constructor(
        public parent: SettingsComponent,
        private svcTheme: ThemeService
    ) {
    }

    ngOnInit() {
        this.primaryColor = this.svcTheme.getStyle('--primary-color');
        this.fontFamily = this.svcTheme.getStyle('--font-family');
    }

    setPrimaryColor(): void {
        this.svcTheme.setPrimaryColor(this.primaryColor);
    }

    setFontFamily(): void {
        this.svcTheme.setFontFamily(this.fontFamily);
    }

}
