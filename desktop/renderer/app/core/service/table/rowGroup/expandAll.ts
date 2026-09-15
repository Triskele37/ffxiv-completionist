import type { TableService } from '../table.service';
import type { ExpandedRows } from '../types';

export function expandAll(service: TableService) {
    return (): void => {
        service.expandedRows.set(
            service.originalTasks
                .map((task) => task._parent.fullStorageKey)
                .reduce((acc, key) => {
                    acc[key] = true;
                    return acc;
                }, {} as ExpandedRows)
        );
    };
}
