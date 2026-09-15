import type { TableRowReorderEvent } from 'primeng/table';

import type { TableService } from '../table.service';

/**
 * Custom task reordering
 * - This relies on the task list not being filterable
 * */
export function onRowReorder(service: TableService) {
    return (
        $event: TableRowReorderEvent,
    ): void => {
        if($event.dragIndex === undefined) return;
        if($event.dropIndex === undefined) return;

        // Bail if nothing moved
        if($event.dragIndex === $event.dropIndex) return;

        // Move the dragged task in the tasks array
        if($event.dragIndex < $event.dropIndex) {
            const task = service.originalTasks.splice($event.dragIndex, 1)[0];
            service.originalTasks.splice($event.dropIndex, 0, task);
        }
        else {
            const task = service.originalTasks.splice($event.dragIndex, 1)[0];
            service.originalTasks.splice($event.dropIndex, 0, task);
        }

        // Reorder saved data
        service.svcCustomContent.reorderTasks(service.originalTasks);

        // Debounce dragging since its tied to file write
        service.debounceDrag.set(true);
        setTimeout(() => service.debounceDrag.set(false), 1000);
    };
}
