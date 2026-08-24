import type { WritableSignal } from '@angular/core';

export type RowGroupContext = {
    expandedRows: WritableSignal<ExpandedRows>;
    groupRows?: boolean;
};

// Type passed into Prime table
export type ExpandedRows = {
    [key: string]: true;
};
