import type { DataGroup } from '@model/DataGroup';

import type { NavigationService } from '../navigation.service';

// All group setting should flow through this function
export function setSelectedGroup(service: NavigationService) {
    return (
        group: DataGroup,
    ): void => {
        const breadcrumbs = group.fullStorageKey.split('.');

        service.addGroupHistory();
        service.breadcrumbs.set(breadcrumbs);
        service.selectedGroup.set(group);
        service.svcConfig.set('last-breadcrumbs', breadcrumbs);
    };
}
