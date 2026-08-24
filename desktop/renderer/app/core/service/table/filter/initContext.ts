import { effect } from '@angular/core';

import type { TableServiceContext } from '@service/table/types';

/**
 * service constructor init for filter facet
 * */
export function initContext(
    this: TableServiceContext,
): void {
    const filters = this.svcConfig.get('table-filters');
    this.filter.completion.completed = !!filters.completed;
    this.filter.completion.incomplete = !!filters.incomplete;
    this.filter.completion.excluded = !!filters.excluded;

    this.filter.onFilterUpdate$.next();

    // Grab the selected group's cached filter
    effect(() => {
        const selectedGroup = this.svcNavigation.selectedGroup();
        this.filter.filters = this.filter.groupFilters[selectedGroup?.fullStorageKey ?? ''] ?? {};
        this.filter.onFilterUpdate$.next();
    });
}
