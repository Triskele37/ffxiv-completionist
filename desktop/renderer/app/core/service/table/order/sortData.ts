import type { SortEvent } from 'primeng/api';

import type { TableService } from '../table.service';

export function sortData(service: TableService) {
    return (
        $event: SortEvent,
    ): void => {
        if(!$event.data) return;

        $event.data.sort((taskA, taskB) => {
            if(!$event.multiSortMeta) return 0;

            for(const { field, order } of $event.multiSortMeta) {
                // In case of an array of values, take the first
                const a = Array.isArray(taskA[field]) ? taskA[field][0] : taskA[field];
                const b = Array.isArray(taskB[field]) ? taskB[field][0] : taskB[field];
                let result;

                if(!a || !b) result = a ? -1 : b ? 1 : 0;
                else if(typeof a === 'number' && typeof b === 'number') {
                    result = (a < b) ? -1 : (a > b) ? 1 : 0;
                }
                else {
                    result = service.sortStringOrLink(a, b, field);
                }

                if(result) return result * order;
            }

            return 0;
        });
    };
}
