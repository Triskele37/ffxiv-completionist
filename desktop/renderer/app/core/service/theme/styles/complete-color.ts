import { RGBColor } from 'primeng/inputcolor';

import type { ThemeService } from '../theme.service';

export function loadCompleteColor(service: ThemeService) {
    return (): void => {
        service.setCompleteColor(service.loadRGBColor('completed-rgb'));
    };
}

export function setCompleteColor(service: ThemeService) {
    return (
        rgb: RGBColor,
    ): void => {
        service.setRGBColor(rgb, 'completeColor', 'completed-rgb');
    };
}
