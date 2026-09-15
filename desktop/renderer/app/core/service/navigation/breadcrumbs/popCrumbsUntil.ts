import type { NavigationService } from '../navigation.service';

export function popCrumbsUntil(service: NavigationService) {
    return (
        index: number,
    ): void => {
        // Step backward through breadcrumbs, pop until index is hit
        const breadcrumbs = service.breadcrumbs();
        for(let i = breadcrumbs.length; i > -1; i--) {
            if(i - 1 === index) break;
            breadcrumbs.pop();
        }

        service.setBreadcrumbs(breadcrumbs);
    };
}
