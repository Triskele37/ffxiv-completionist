import type { TableService } from '../table.service';

export function applyShiftSelection(service: TableService) {
    return (
        fromIndex: number,
        newSelectedState: boolean,
    ): void => {
        if(service.lastClickedRowIndex === undefined) return;

        const topDown = fromIndex > service.lastClickedRowIndex;
        const startIndex = topDown ? service.lastClickedRowIndex : fromIndex;
        const endIndex = topDown ? fromIndex : service.lastClickedRowIndex;

        const tasks = service.tasks();
        for(let i = 0; i <= endIndex; i++) {
            if(i >= startIndex && i <= endIndex) {
                if(tasks[i].selected() !== newSelectedState) {
                    tasks[i].selected.set(newSelectedState);
                }
            }
        }
    };
}
