import { Component, OnInit } from '@angular/core';

import { ThemeService } from '@service/theme/theme.service';

import { SettingsService } from '../settings.service';

@Component({
    selector: 'xiv-theme-settings',
    templateUrl: './theme-settings.component.html',
    styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {
    gradients: string[];

    constructor(
        public svcSettings: SettingsService,
        public svcTheme: ThemeService
    ) {
    }

    ngOnInit(): void {
        this.updateGradient();
    }

    updateGradient(): void {
        this.gradients = [];
        for(let i = 1; i <= 100; i++) {
            const step = this.svcTheme.rygGradient(i / 100);
            this.gradients.push(step);
        }
    }

    //#region------------------------------------------------------- Themes
    useDefaultTheme(): void {
        this.svcTheme.setPrimaryColor('#456c37');
        this.svcTheme.setPrimaryTextColor('#121212');
        this.svcTheme.setBackgroundColor({ h: 0, s: 0, b: 12 });
        this.svcTheme.setTextColor({ r: 255, g: 255, b: 255 });
        this.svcTheme.setFontFamily('sans-serif');
    }

    useDarkTheme(): void {
        this.svcTheme.setPrimaryColor('#9B8152');
        this.svcTheme.setPrimaryTextColor('#ded2ba');
        this.svcTheme.setBackgroundColor({ h: 160, s: 0, b: 19 });
        this.svcTheme.setTextColor({ r: 222, g: 210, b: 186 });
        this.svcTheme.setFontFamily('sans-serif');
    }

    useLightTheme(): void {
        this.svcTheme.setPrimaryColor('#4e3c24');
        this.svcTheme.setPrimaryTextColor('#fdfdfe');
        this.svcTheme.setBackgroundColor({ h: 32, s: 75, b: 84 });
        this.svcTheme.setTextColor({ r: 86, g: 63, b: 57 });
        this.svcTheme.setFontFamily('sans-serif');
    }

    useClassicTheme(): void {
        this.svcTheme.setPrimaryColor('#888888');
        this.svcTheme.setPrimaryTextColor('#ffffff');
        this.svcTheme.setBackgroundColor({ h: 253, s: 100, b: 31 });
        this.svcTheme.setTextColor({ r: 238, g: 236, b: 247 });
        this.svcTheme.setFontFamily('sans-serif');
    }

    //#endregion

    resetFontSize(): void {
        this.svcTheme.setFontSize(16);
    }

    //#region------------------------------------------------------- Completion Colors
    setIncompleteColor(): void {
        this.svcTheme.setIncompleteColor(this.svcTheme.incompleteColor);
        this.updateGradient();
    }

    setPartialCompleteColor(): void {
        this.svcTheme.setPartialCompleteColor(this.svcTheme.partialCompleteColor);
        this.updateGradient();
    }

    setCompleteColor(): void {
        this.svcTheme.setCompleteColor(this.svcTheme.completeColor);
        this.updateGradient();
    }

    resetIncompleteColor(): void {
        this.svcTheme.setIncompleteColor({ r: 111, g: 0, b: 0 });
        this.updateGradient();
    }

    resetPartialCompleteColor(): void {
        this.svcTheme.setPartialCompleteColor({ r: 111, g: 111, b: 0 });
        this.updateGradient();
    }

    resetCompleteColor(): void {
        this.svcTheme.setCompleteColor({ r: 0, g: 111, b: 0 });
        this.updateGradient();
    }

    resetExcludedColor(): void {
        this.svcTheme.setExcludedColor({ r: 111, g: 111, b: 111 });
    }

    //#endregion

}
