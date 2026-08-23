import { signal } from '@angular/core';

import type { TableServiceContext } from '../types';
import { onRowReorder } from './onRowReorder';
import { sortData } from './sortData';
import { sortStringOrLink } from './sortStringOrLink';
import type { OrderFacetContext } from './_types';

export type TableOrderFacet = ReturnType<typeof createOrderFacet>;

export function createOrderFacet(this: TableServiceContext) {
    const context: OrderFacetContext = {
        debounceDrag: signal(false),
    };

    return {
        ...context,
        onRowReorder: onRowReorder.bind(this),
        sortData: sortData.bind(this),
        sortStringOrLink: sortStringOrLink.bind(this),
    };
}
