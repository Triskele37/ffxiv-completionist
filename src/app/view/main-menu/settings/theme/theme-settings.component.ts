import { Component, Input, OnInit } from '@angular/core';

import { HSL, RGB, ThemeService } from '@service/theme/theme.service';

import { Settings } from '../settings';
import { SettingsComponent } from '../settings.component';

@Component({
    selector: 'xiv-theme-settings',
    templateUrl: './theme-settings.component.html',
    styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {
    @Input() settings: Settings;

    primaryColor: string;
    primaryTextColor: string;
    backgroundColor: HSL;
    textColor: RGB;
    fontFamily: string;

    constructor(
        public parent: SettingsComponent,
        private svcTheme: ThemeService
    ) {
    }

    ngOnInit() {
        this.primaryColor = this.svcTheme.getStyle('--primary-color');
        this.primaryTextColor = this.svcTheme.getStyle('--primary-color-text');

        this.backgroundColor = {
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

    //#region------------------------------------------------------- Primary Color
    setPrimaryColor(): void {
        this.svcTheme.setPrimaryColor(this.primaryColor);
    }

    resetPrimaryColor(): void {
        this.primaryColor = this.svcTheme.defaultPrimaryColor;
        this.setPrimaryColor();
    }

    //#endregion

    //#region------------------------------------------------------- Primary Text Color
    setPrimaryTextColor(): void {
        this.svcTheme.setPrimaryTextColor(this.primaryTextColor);
    }

    resetPrimaryTextColor(): void {
        this.primaryTextColor = this.svcTheme.defaultPrimaryTextColor;
        this.setPrimaryTextColor();
    }

    //#endregion

    //#region------------------------------------------------------- Background Color
    setBackgroundColor(): void {
        this.svcTheme.setBackgroundColor(this.backgroundColor);
    }

    resetBackgroundColor(): void {
        this.backgroundColor = this.svcTheme.defaultBackgroundColor;
        this.setBackgroundColor();
    }

    //#endregion

    //#region------------------------------------------------------- Text Color
    setTextColor(): void {
        this.svcTheme.setTextColor(this.textColor);
    }

    resetTextColor(): void {
        this.textColor = this.svcTheme.defaultTextColor;
        this.setTextColor();
    }

    //#endregion

    //#region------------------------------------------------------- Font Family
    setFontFamily(): void {
        this.svcTheme.setFontFamily(this.fontFamily);
    }

    resetFontFamily(): void {
        this.fontFamily = this.svcTheme.defaultFontFamily;
        this.setFontFamily();
    }

    //#endregion

}
