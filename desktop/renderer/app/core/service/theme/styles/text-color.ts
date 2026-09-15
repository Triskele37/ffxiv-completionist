import { RGBColor } from 'primeng/inputcolor';

import type { ThemeService } from '../theme.service';

export function loadTextColor(service: ThemeService) {
    return (): void => {
        service.setTextColor(service.loadRGBColor('text-color-rgb'));
    };
}

export function setTextColor(service: ThemeService) {
    return (
        rgb: RGBColor,
    ): void => {
        service.setRGBColor(rgb, 'textColor', 'text-color-rgb');
    };
}
