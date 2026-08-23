import type { SortEvent } from 'primeng/api';

import type { TableServiceContext } from '../types';

export function shouldReset(
    this: TableServiceContext,
    $event: SortEvent
): boolean {
    if(!$event) return false;

    const newSortMetas = $event.multiSortMeta?.filter(
        (msm) => msm.field !== '_parent.fullStorageKey'
    ) ?? [];

    if(newSortMetas.length === 1) {
        if(this.order.activeSortMeta) {
            const { field, order } = newSortMetas[0];

            if(this.order.activeSortMeta.field !== field) {
                this.order.activeSortMeta = newSortMetas[0];
            }
            else if(this.order.activeSortMeta.order === order) {
                this.order.activeSortMeta = null;
                return true;
            }
        }
        else {
            this.order.activeSortMeta = newSortMetas[0];
        }
    }
    else {
        this.order.activeSortMeta = null;
    }

    return false;
}
