import type { NavigationService } from '../navigation.service';

export function popCrumbsOnce(service: NavigationService) {
    return (): void => {
        const breadcrumbs = service.breadcrumbs();
        breadcrumbs.pop();

        service.setBreadcrumbs(breadcrumbs);
    };
}
