import { untracked } from '@angular/core';

import type { Column } from '@model/Column';

import type { TableServiceContext } from '../types';
import type { Filter } from './_types';

/**
 * Handler for modifying a column's filter
 * */
export function modifyFilter(
    this: TableServiceContext,
    value: Filter['value'],
    column: Column
): void {
    // Don't run filter unnecessarily
    if(!shouldFilter(this.filter.filters[column.key]?.value, value)) return;

    // null the filter on removals, replace on add/modify
    this.filter.filters[column.key] = !value?.length ? null : {
        key: column.key,
        value: Array.isArray(value) ? [...value] : value,
    };

    // Keep track of each group's filter settings
    untracked(() => {
        const selectedGroup = this.svcNavigation.selectedGroup();
        if(!selectedGroup) return;
        this.filter.groupFilters[selectedGroup.fullStorageKey] = this.filter.filters;
    });

    this.filter.onFilterUpdate$.next();
}

function shouldFilter(
    a: Filter['value'] | undefined,
    b: Filter['value'] | undefined
) {
    if(!a) return !!b;
    if(!b) return !!a;

    const isStrA = typeof a === 'string';
    const isStrB = typeof b === 'string';

    if(isStrA || isStrB) {
        if(isStrA !== isStrB) return true;
        return a !== b;
    }

    if(a.length !== b.length) return true;

    return [...a].sort().join(',') !== [...b].sort().join(',');
}
