import { untracked } from '@angular/core';

import { Column } from '@model/Column';

import { TableServiceContext } from '../types';
import { Filter } from './types';

/**
 * Handler for modifying a column's filter
 * */
export function modifyFilter(
    this: TableServiceContext,
    value: Filter['value'],
    column: Column
): void {
    // Don't run filter unnecessarily
    if(this.filter.filters[column.key]?.value === value) return;

    // null the filter on removals, replace on add/modify
    this.filter.filters[column.key] = !value ? null : {
        key: column.key,
        value
    };

    // Keep track of each group's filter settings
    untracked(() => {
        const selectedGroup = this.svcNavigation.selectedGroup();
        if(!selectedGroup) return;
        this.filter.groupFilters[selectedGroup.fullStorageKey] = this.filter.filters;
    });

    this.filter.onFilterUpdate$.next();
}
