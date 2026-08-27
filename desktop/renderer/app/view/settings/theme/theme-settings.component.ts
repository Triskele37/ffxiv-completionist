import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { RGBColor } from 'primeng/inputcolor';
import { InputNumber } from 'primeng/inputnumber';
import { InputText } from 'primeng/inputtext';
import { Tooltip } from 'primeng/tooltip';

import { ColorPickerComponent } from '@component/color-picker/color-picker.component';
import { ThemeService } from '@service/theme/theme.service';

import { ThemePresetsComponent } from './presets/presets.component';

@Component({
    selector: 'com-theme-settings',
    templateUrl: './theme-settings.component.html',
    styleUrls: ['./theme-settings.component.scss'],
    imports: [
        ButtonDirective,
        FormsModule,
        InputNumber,
        InputText,
        Tooltip,
        TranslatePipe,
        ColorPickerComponent,

        ThemePresetsComponent
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

    resetFontSize(): void {
        this.svcTheme.setFontSize(16);
    }

    //#region------------------------------------------------------- Completion Colors
    setIncompleteColor(rgb: RGBColor): void {
        this.svcTheme.setIncompleteColor(rgb);
        this.updateGradient();
    }

    setPartialCompleteColor(rgb: RGBColor): void {
        this.svcTheme.setPartialCompleteColor(rgb);
        this.updateGradient();
    }

    setCompleteColor(rgb: RGBColor): void {
        this.svcTheme.setCompleteColor(rgb);
        this.updateGradient();
    }

    resetIncompleteColor(): void {
        this.svcTheme.setIncompleteColor(new RGBColor(111, 0, 0));
        this.updateGradient();
    }

    resetPartialCompleteColor(): void {
        this.svcTheme.setPartialCompleteColor(new RGBColor(111, 111, 0));
        this.updateGradient();
    }

    resetCompleteColor(): void {
        this.svcTheme.setCompleteColor(new RGBColor(0, 111, 0));
        this.updateGradient();
    }

    resetExcludedColor(): void {
        this.svcTheme.setExcludedColor(new RGBColor(111, 111, 111));
    }

    //#endregion

}
