import { RGBColor } from 'primeng/inputcolor';

import type { ThemeService } from '../theme.service';

export function loadExcludedColor(service: ThemeService) {
    return (): void => {
        service.setExcludedColor(service.loadRGBColor('excluded-rgb'));
    };
}

export function setExcludedColor(service: ThemeService) {
    return (
        rgb: RGBColor,
    ): void => {
        service.setRGBColor(rgb, 'excludedColor', 'excluded-rgb');
    };
}
