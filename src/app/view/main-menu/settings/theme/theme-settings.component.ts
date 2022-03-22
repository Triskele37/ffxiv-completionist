import { Component, Input, OnInit } from '@angular/core';

import { HSL, RGB, ThemeService } from '@service/theme/theme.service';

import { Settings } from '../settings';
import { SettingsComponent } from '../settings.component';

@Component({
    selector: 'xiv-theme-settings',
    templateUrl: './theme-settings.component.html'
})
export class ThemeSettingsComponent implements OnInit {
    @Input() settings: Settings;

    primaryColor: string;
    primaryText: string;
    background: HSL;
    textColor: RGB;
    fontFamily: string;

    constructor(
        public parent: SettingsComponent,
        private svcTheme: ThemeService
    ) {
    }

    ngOnInit() {
        this.primaryColor = this.svcTheme.getStyle('--primary-color');
        this.primaryText = this.svcTheme.getStyle('--primary-color-text');

        this.background = {
            h: parseInt(this.svcTheme.getStyle('--bg-h'), 10),
            s: parseInt(this.svcTheme.getStyle('--bg-s'), 10),
            b: parseInt(this.svcTheme.getStyle('--bg-l'), 10),
        };

        const textRgb = this.svcTheme.getStyle('--text-color-rgb').split(', ');
        this.textColor = {
            r: parseInt(textRgb[0], 10),
            g: parseInt(textRgb[1], 10),
            b: parseInt(textRgb[2], 10)
        };

        this.fontFamily = this.svcTheme.getStyle('--font-family');
    }

    setPrimaryColor(): void {
        this.svcTheme.setPrimaryColor(this.primaryColor);
    }

    setPrimaryText(): void {
        this.svcTheme.setPrimaryText(this.primaryText);
    }

    setBackground(): void {
        this.svcTheme.setBackground(this.background);
    }

    setTextColor(): void {
        this.svcTheme.setTextColor(this.textColor);
    }

    setFontFamily(): void {
        this.svcTheme.setFontFamily(this.fontFamily);
    }

    resetTheme() {
        this.primaryColor = '#0f4c75';
        this.primaryText = '#121212';
        this.background = { h: 0, s: 0, b: 12 };
        this.textColor = { r: 255, g: 255, b: 255 };
        this.fontFamily = 'sans-serif';

        this.setPrimaryColor();
        this.setPrimaryText();
        this.setTextColor();
        this.setFontFamily();
        this.setBackground();
    }

}
