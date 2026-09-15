import type { NavigationService } from '../navigation.service';

// All breadcrumb setting should flow through this function
export function setBreadcrumbs(service: NavigationService) {
    return (
        breadcrumbs: string[],
    ): void => {
        service.addGroupHistory();
        service.breadcrumbs.set(breadcrumbs);
        const group = service.getGroupFromBreadcrumbs(breadcrumbs);
        service.selectedGroup.set(group);
        service.svcConfig.set('last-breadcrumbs', breadcrumbs);
    };
}
