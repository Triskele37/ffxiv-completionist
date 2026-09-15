import { ThemeService } from '../theme.service';

export function initService(service: ThemeService) {
    return (): void => {
        service.loadPrimaryColor();
        service.loadPrimaryTextColor();
        service.loadBackgroundColor();
        service.loadTextColor();
        service.loadFontFamily();
        service.loadFontSize();

        service.loadIncompleteColor();
        service.loadPartialCompleteColor();
        service.loadCompleteColor();
        service.loadExcludedColor();
    };
}
