import type { WritableSignal } from '@angular/core';
import type { SortMeta } from 'primeng/api';

export type OrderFacetContext = {
    activeSortMeta: SortMeta | null;
    originalOrder: string[];
    debounceDrag: WritableSignal<boolean>;
};
