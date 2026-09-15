import type { SortEvent } from 'primeng/api';

import type { TableService } from '../table.service';

export function shouldReset(service: TableService) {
    return (
        $event: SortEvent,
    ): boolean => {
        if(!$event) return false;

        const newSortMetas = $event.multiSortMeta?.filter(
            (msm) => msm.field !== '_parent.fullStorageKey'
        ) ?? [];

        if(newSortMetas.length === 1) {
            if(service.activeSortMeta) {
                const { field, order } = newSortMetas[0];

                if(service.activeSortMeta.field !== field) {
                    service.activeSortMeta = newSortMetas[0];
                }
                else if(service.activeSortMeta.order === order) {
                    service.activeSortMeta = null;
                    return true;
                }
            }
            else {
                service.activeSortMeta = newSortMetas[0];
            }
        }
        else {
            service.activeSortMeta = null;
        }

        return false;
    };
}
