import type { SortEvent } from 'primeng/api';

import type { TableServiceContext } from '../types';

export function resetSort(
    this: TableServiceContext,
    $event: SortEvent,
): void {
    const { originalOrder } = this.order;

    $event.data?.sort((taskA, taskB) => {
        const a = originalOrder.indexOf(taskA.fullStorageKey);
        const b = originalOrder.indexOf(taskB.fullStorageKey);
        return a - b;
    });
}
