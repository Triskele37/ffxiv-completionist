import type { ThemeService } from '../theme.service';

export function setStyle(service: ThemeService) {
    return (
        varKey: string,
        value: string,
    ): void => {
        service.root?.style.setProperty(varKey, value);
    };
}
