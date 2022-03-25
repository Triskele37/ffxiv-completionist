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
    primaryTextColor: string;
    backgroundColor: HSL;
    textColor: RGB;
    fontFamily: string;

    constructor(
        public parent: SettingsComponent,
        public svcTheme: ThemeService
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

    //#region------------------------------------------------------- Themes
    useDefaultTheme(): void {
        this.setPrimaryColor('#456c37');
        this.setPrimaryTextColor('#121212');
        this.setBackgroundColor({ h: 0, s: 0, b: 12 });
        this.setTextColor({ r: 255, g: 255, b: 255 });
        this.setFontFamily('sans-serif');
    }

    useDarkTheme(): void {
        this.setPrimaryColor('#9B8152');
        this.setPrimaryTextColor('#ded2ba');
        this.setBackgroundColor({ h: 160, s: 0, b: 19 });
        this.setTextColor({ r: 222, g: 210, b: 186 });
        this.setFontFamily('sans-serif');
    }

    useLightTheme(): void {
        this.setPrimaryColor('#4e3c24');
        this.setPrimaryTextColor('#fdfdfe');
        this.setBackgroundColor({ h: 32, s: 75, b: 84 });
        this.setTextColor({ r: 86, g: 63, b: 57 });
        this.setFontFamily('sans-serif');
    }

    useClassicTheme(): void {
        this.setPrimaryColor('#888888');
        this.setPrimaryTextColor('#ffffff');
        this.setBackgroundColor({ h: 253, s: 100, b: 31 });
        this.setTextColor({ r: 238, g: 236, b: 247 });
        this.setFontFamily('sans-serif');
    }

    //#endregion

    //#region------------------------------------------------------- Setters
    setPrimaryColor(color: string): void {
        this.primaryColor = color;
        this.svcTheme.setPrimaryColor(color);
    }

    setPrimaryTextColor(color: string): void {
        this.primaryTextColor = color;
        this.svcTheme.setPrimaryTextColor(color);
    }

    setBackgroundColor(color: HSL): void {
        this.backgroundColor = color;
        this.svcTheme.setBackgroundColor(color);
    }

    setTextColor(color: RGB): void {
        this.textColor = color;
        this.svcTheme.setTextColor(color);
    }

    setFontFamily(font: string): void {
        this.fontFamily = font;
        this.svcTheme.setFontFamily(font);
    }

    //#endregion

}
