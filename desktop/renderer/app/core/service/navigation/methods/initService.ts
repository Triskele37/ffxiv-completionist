import { NavigationService } from '../navigation.service';

export function initService(service: NavigationService) {
    return (): void => {
        // Load last breadcrumb state
        const lastBreadcrumbs = service.svcConfig.get('last-breadcrumbs') as string[];
        if(lastBreadcrumbs) {
            service.svcData.whenLoaded$.subscribe(
                () => service.setBreadcrumbs(lastBreadcrumbs)
            );
        }
    };
}
