import { HSBColor, HSLColor } from 'primeng/inputcolor';

import { hsbToHsl } from '@model/Color/hsbToHsl';
import { hslToHsb } from '@model/Color/hslToHsb';

import type { ThemeService } from '../theme.service';

export function loadBackgroundColor(service: ThemeService) {
    return (): void => {
        const hslStr = service.svcConfig.get('theme.background').split(', ');
        const hue = parseInt(hslStr[0], 10);
        const saturation = parseInt(hslStr[1], 10);
        const lightness = parseInt(hslStr[2], 10);

        service.setBackgroundColorFromHsl(new HSLColor(hue, saturation, lightness));
    };
}

export function setBackgroundColorFromHsb(service: ThemeService) {
    return (
        background: HSBColor,
    ): void => {
        service.backgroundColor = hsbToHsl(background);
        service.backgroundColorHsb = background;
        service.updateBackgroundColor();
    };
}

export function setBackgroundColorFromHsl(service: ThemeService) {
    return (
        background: HSLColor,
    ): void => {
        service.backgroundColor = background;
        service.backgroundColorHsb = hslToHsb(background);
        service.updateBackgroundColor();
    };
}

export function updateBackgroundColor(service: ThemeService) {
    return (): void => {
        if(!service.backgroundColor) {
            console.error('Error: Missing backgroundColor');
            return;
        }

        const { hue, saturation, lightness } = service.backgroundColor;
        service.setStyle('--bg-h', `${hue}`);
        service.setStyle('--bg-s', `${saturation}%`);
        service.setStyle('--bg-l', `${lightness}%`);

        service.svcConfig.set('theme.background', `${hue}, ${saturation}, ${lightness}`);
    };
}
