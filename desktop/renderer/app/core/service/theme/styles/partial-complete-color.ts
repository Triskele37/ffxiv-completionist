import { RGBColor } from 'primeng/inputcolor';

import type { ThemeService } from '../theme.service';

export function loadPartialCompleteColor(service: ThemeService) {
    return (): void => {
        service.setPartialCompleteColor(service.loadRGBColor('partial-complete-rgb'));
    };
}

export function setPartialCompleteColor(service: ThemeService) {
    return (
        rgb: RGBColor,
    ): void => {
        service.setRGBColor(rgb, 'partialCompleteColor', 'partial-complete-rgb');
    };
}
