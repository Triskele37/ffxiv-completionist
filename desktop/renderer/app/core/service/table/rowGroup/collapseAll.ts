import type { TableService } from '../table.service';

export function collapseAll(service: TableService) {
    return (): void => {
        service.expandedRows.set({});
    };
}
