import type { ThemeService } from '../theme.service';

export function loadFontFamily(service: ThemeService) {
    return (): void => {
        service.setFontFamily(service.svcConfig.get('theme.font-family'));
    };
}

export function setFontFamily(service: ThemeService) {
    return (
        fontFamily: string,
    ): void => {
        service.fontFamily = fontFamily;

        const includesFallback = ['serif', 'sans-serif', 'monospace']
            .some((font) => fontFamily.includes(font));

        if(!includesFallback) fontFamily += ', sans-serif';
        fontFamily = fontFamily.trim();

        service.setStyle('--font-family', fontFamily);
        service.svcConfig.set('theme.font-family', fontFamily);
    };
}
