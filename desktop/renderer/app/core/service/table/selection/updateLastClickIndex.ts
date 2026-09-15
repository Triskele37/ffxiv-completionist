import type { TableService } from '../table.service';

export function updateLastClickIndex(service: TableService) {
    return (
        newLastClickedIndex: number,
    ): void => {
        service.lastClickedRowIndex = newLastClickedIndex;
    };
}
