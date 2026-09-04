import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';

import { ThemeService } from '@service/theme/theme.service';

import { STANDARD_PRESETS, PRESETS, ThemePreset } from './presets';
import { NgTemplateOutlet } from '@angular/common';
import { Popover } from 'primeng/popover';

@Component({
    selector: 'com-theme-presets',
    templateUrl: 'presets.component.html',
    imports: [
        ButtonGroup,
        ButtonDirective,
        NgTemplateOutlet,
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
        this.svcTheme.setBackgroundColorFromHsb(this.svcTheme.hsbFromHex(preset.background));
        this.svcTheme.setTextColor(this.svcTheme.rgbColorFromHex(preset.backgroundText));
        this.svcTheme.setIncompleteColor(this.svcTheme.rgbColorFromHex(preset.incomplete));
        this.svcTheme.setPartialCompleteColor(this.svcTheme.rgbColorFromHex(preset.partial));
        this.svcTheme.setCompleteColor(this.svcTheme.rgbColorFromHex(preset.complete));
        this.svcTheme.setExcludedColor(this.svcTheme.rgbColorFromHex(preset.exclude));
        this.svcTheme.setFontFamily('sans-serif');

        this.presetApplied.emit();
    }
}
