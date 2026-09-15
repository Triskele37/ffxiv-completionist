import { RGBColor } from 'primeng/inputcolor';

import type { ThemeService } from '../theme.service';

export function loadIncompleteColor(service: ThemeService) {
    return (): void => {
        service.setIncompleteColor(service.loadRGBColor('incomplete-rgb'));
    };
}

export function setIncompleteColor(service: ThemeService) {
    return (
        rgb: RGBColor,
    ): void => {
        service.setRGBColor(rgb, 'incompleteColor', 'incomplete-rgb');
    };
}
