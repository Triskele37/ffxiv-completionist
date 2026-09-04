import { signal } from '@angular/core';

import type { TableServiceContext } from '../types';
import { onRowReorder } from './onRowReorder';
import { sortData } from './sortData';
import { sortStringOrLink } from './sortStringOrLink';
import { shouldReset } from './shouldReset';
import { resetSort } from './resetSort';
import type { OrderFacetContext } from './_types';

export type TableOrderFacet = ReturnType<typeof createOrderFacet>;

export function createOrderFacet(this: TableServiceContext) {
    const context: OrderFacetContext = {
        activeSortMeta: null,
        originalOrder: [],
        debounceDrag: signal(false),
    };

    return {
        ...context,
        onRowReorder: onRowReorder.bind(this),
        sortData: sortData.bind(this),
        sortStringOrLink: sortStringOrLink.bind(this),
        shouldReset: shouldReset.bind(this),
        resetSort: resetSort.bind(this),
    };
}
