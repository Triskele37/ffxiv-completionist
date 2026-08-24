import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { ColorPicker } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { InputText } from 'primeng/inputtext';
import { Tooltip } from 'primeng/tooltip';

import { ThemeService } from '@service/theme/theme.service';

@Component({
    selector: 'com-theme-settings',
    templateUrl: './theme-settings.component.html',
    styleUrls: ['./theme-settings.component.scss'],
    imports: [
        ButtonDirective,
        ButtonGroup,
        ColorPicker,
        FormsModule,
        InputNumber,
        InputText,
        Tooltip,
        TranslatePipe
    ],
})
export class ThemeSettingsComponent implements OnInit {
    svcTheme = inject(ThemeService);

    gradients?: string[];

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
        this.svcTheme.setBackgroundColorFromHsl({ h: 0, s: 0, l: 12 });
        this.svcTheme.setTextColor({ r: 255, g: 255, b: 255 });
        this.svcTheme.setFontFamily('sans-serif');
    }

    useDarkTheme(): void {
        this.svcTheme.setPrimaryColor('#9B8152');
        this.svcTheme.setPrimaryTextColor('#ded2ba');
        this.svcTheme.setBackgroundColorFromHsl({ h: 160, s: 0, l: 19 });
        this.svcTheme.setTextColor({ r: 222, g: 210, b: 186 });
        this.svcTheme.setFontFamily('sans-serif');
    }

    useLightTheme(): void {
        this.svcTheme.setPrimaryColor('#4e3c24');
        this.svcTheme.setPrimaryTextColor('#fdfdfe');
        this.svcTheme.setBackgroundColorFromHsl({ h: 32, s: 75, l: 84 });
        this.svcTheme.setTextColor({ r: 86, g: 63, b: 57 });
        this.svcTheme.setFontFamily('sans-serif');
    }

    useClassicTheme(): void {
        this.svcTheme.setPrimaryColor('#888888');
        this.svcTheme.setPrimaryTextColor('#ffffff');
        this.svcTheme.setBackgroundColorFromHsl({ h: 253, s: 100, l: 31 });
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
