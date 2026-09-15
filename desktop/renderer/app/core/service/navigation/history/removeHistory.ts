import type { DataGroup } from '@model/DataGroup';

import type { NavigationService } from '../navigation.service';

export function removeHistory(service: NavigationService) {
    return (
        group: DataGroup,
    ): void => {
        const newHistory = [...service.groupHistory()].filter((g) => g !== group);
        service.groupHistory.set(newHistory);
    };
}
