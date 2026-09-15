import { effect } from '@angular/core';

import type { TableService } from '../table.service';

/**
 * service constructor init for filter facet
 * */
export function initFilters(service: TableService) {
    return (): void => {
        const filters = service.svcConfig.get('table-filters');
        service.completionFilter.completed = !!filters.completed;
        service.completionFilter.incomplete = !!filters.incomplete;
        service.completionFilter.excluded = !!filters.excluded;

        service.onFilterUpdate$.next();

        // Grab the selected group's cached filter
        effect(() => {
            const selectedGroup = service.svcNavigation.selectedGroup();
            service.filters = service.groupFilters[selectedGroup?.fullStorageKey ?? ''] ?? {};
            service.updateFilteredTasks();
            service.onFilterUpdate$.next();
        });
    };
}
