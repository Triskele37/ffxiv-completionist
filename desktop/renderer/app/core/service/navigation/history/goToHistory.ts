import type { DataGroup } from '@model/DataGroup';

import type { NavigationService } from '../navigation.service';

export function goToHistory(service: NavigationService) {
    return (
        group: DataGroup,
    ): void => {
        service.setBreadcrumbs(group.fullStorageKey.split('.'));
    };
}
