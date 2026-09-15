import type { SortEvent } from 'primeng/api';

import type { TableService } from '../table.service';

export function resetSort(service: TableService) {
    return (
        $event: SortEvent,
    ): void => {
        $event.data?.sort((taskA, taskB) => {
            const a = service.originalOrder.indexOf(taskA.fullStorageKey);
            const b = service.originalOrder.indexOf(taskB.fullStorageKey);
            return a - b;
        });
    };
}
