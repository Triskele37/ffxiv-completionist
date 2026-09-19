import type { NavigationService } from '../navigation.service';

export function clearHistory(service: NavigationService) {
    return (): void => {
        service.groupHistory.set([]);
    };
}
