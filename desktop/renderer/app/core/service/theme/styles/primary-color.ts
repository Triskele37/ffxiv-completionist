import { hexToRgb } from '@model/Color/hexToRgb';

import type { ThemeService } from '../theme.service';

export function loadPrimaryColor(service: ThemeService) {
    return (): void => {
        service.setPrimaryColor(service.svcConfig.get('theme.primary-color'));
    };
}

export function setPrimaryColor(service: ThemeService) {
    return (
        hex: string,
    ): void => {
        service.primaryColor = hex;
        const [r, g, b] = hexToRgb(hex);

        service.setStyle('--primary-color', hex);
        service.setStyle('--primary-color-rgb', `${r}, ${g}, ${b}`);

        service.svcConfig.set('theme.primary-color', hex);
    };
}
