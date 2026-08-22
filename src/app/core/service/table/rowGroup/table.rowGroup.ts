import { signal } from '@angular/core';

import type { TableServiceContext } from '../types';
import { expandAll } from './expandAll';
import { collapseAll } from './collapseAll';
import { RowGroupContext } from './types';

export type TableRowGroupFacet = ReturnType<typeof createRowGroupFacet>;

export function createRowGroupFacet(this: TableServiceContext) {
    const context: RowGroupContext = {
        expandedRows: signal({}),
    };

    return {
        ...context,
        expandAll: expandAll.bind(this),
        collapseAll: collapseAll.bind(this),
    };
}
