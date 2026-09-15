import type { ThemeService } from '../theme.service';

export function loadPrimaryTextColor(service: ThemeService) {
    return (): void => {
        service.setPrimaryTextColor(service.svcConfig.get('theme.primary-text'));
    };
}

export function setPrimaryTextColor(service: ThemeService) {
    return (
        hex: string,
    ): void => {
        service.primaryTextColor = hex;

        service.setStyle('--primary-color-text', hex);
        service.svcConfig.set('theme.primary-text', hex);
    };
}

