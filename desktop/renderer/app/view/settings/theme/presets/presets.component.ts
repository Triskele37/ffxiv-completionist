import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { Popover } from 'primeng/popover';

import { hsbFromHex } from '@model/Color/hsbFromHex';
import { rgbColorFromHex } from '@model/Color/rgbColorFromHex';
import { ThemeService } from '@service/theme/theme.service';

import { STANDARD_PRESETS, PRESETS, ThemePreset } from './presets';

@Component({
    selector: 'com-theme-presets',
    templateUrl: 'presets.component.html',
    imports: [
        NgTemplateOutlet,
        NgIcon,
        ButtonGroup,
        ButtonDirective,
        Popover
    ],
    styleUrls: ['presets.component.scss']
})
export class ThemePresetsComponent {
    svcTheme = inject(ThemeService);

    @Output() presetApplied = new EventEmitter<void>();

    standardPresets: ThemePreset[] = STANDARD_PRESETS;
    presets: ThemePreset[] = PRESETS;

    applyPreset(preset: ThemePreset): void {
        this.svcTheme.setPrimaryColor(preset.primary);
        this.svcTheme.setPrimaryTextColor(preset.primaryText);
        this.svcTheme.setBackgroundColorFromHsb(hsbFromHex(preset.background));
        this.svcTheme.setTextColor(rgbColorFromHex(preset.backgroundText));
        this.svcTheme.setIncompleteColor(rgbColorFromHex(preset.incomplete));
        this.svcTheme.setPartialCompleteColor(rgbColorFromHex(preset.partial));
        this.svcTheme.setCompleteColor(rgbColorFromHex(preset.complete));
        this.svcTheme.setExcludedColor(rgbColorFromHex(preset.exclude));
        this.svcTheme.setFontFamily('sans-serif');

        this.presetApplied.emit();
    }
}
