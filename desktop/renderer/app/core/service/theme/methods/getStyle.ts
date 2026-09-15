import type { ThemeService } from '../theme.service';

export function getStyle(service: ThemeService) {
    return (
        varKey: string,
    ): string => {
        if(!service.root) {
            console.error(`Error: Root nullish when retrieving style ${varKey}`);
            return '';
        }

        return getComputedStyle(service.root).getPropertyValue(varKey).trim();
    };
}
