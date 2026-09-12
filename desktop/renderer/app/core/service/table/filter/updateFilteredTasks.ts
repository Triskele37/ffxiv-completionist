import type { TableServiceContext } from '../types';

export function updateFilteredTasks(
    this: TableServiceContext,
): void {
    if(this.originalTasks.length || this.tasks().length) {
        const filteredTasks = this.filter.filterTasks(this.group(), this.originalTasks);
        this.tasks.set(filteredTasks);
        this.uniqueValues = this.filter.getUniqueValues();
        this.filter.onFilterApplied$.next();
    }
}
