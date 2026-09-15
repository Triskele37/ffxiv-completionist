import type { ThemeService } from '../theme.service';

export function loadFontSize(service: ThemeService) {
    return (): void => {
        service.setFontSize(service.svcConfig.get('theme.font-size'));
    };
}

export function setFontSize(service: ThemeService) {
    return (
        fontSize: number,
    ): void => {
        service.fontSize = fontSize;

        service.setStyle('--font-size', `${fontSize}px`);
        service.svcConfig.set('theme.font-size', fontSize);
    };
}
