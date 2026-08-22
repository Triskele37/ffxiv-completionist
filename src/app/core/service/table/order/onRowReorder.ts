import { TableRowReorderEvent } from 'primeng/table';

import { TableServiceContext } from '../types';

/**
 * Custom task reordering
 * - This relies on the task list not being filterable
 * */
export function onRowReorder(
    this: TableServiceContext,
    $event: TableRowReorderEvent
): void {
    if($event.dragIndex === undefined) return;
    if($event.dropIndex === undefined) return;

    // Bail if nothing moved
    if($event.dragIndex === $event.dropIndex) return;

    // Move the dragged task in the tasks array
    if($event.dragIndex < $event.dropIndex) {
        const task = this.originalTasks.splice($event.dragIndex, 1)[0];
        this.originalTasks.splice($event.dropIndex, 0, task);
    }
    else {
        const task = this.originalTasks.splice($event.dragIndex, 1)[0];
        this.originalTasks.splice($event.dropIndex, 0, task);
    }

    // Reorder saved data
    this.svcCustomContent.reorderTasks(this.originalTasks);

    // Debounce dragging since its tied to file write
    this.order.debounceDrag.set(true);
    setTimeout(() => this.order.debounceDrag.set(false), 1000);
}
