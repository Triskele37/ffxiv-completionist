import type { TableServiceContext } from '../types';

export function updateFilteredTasks(
    this: TableServiceContext,
): void {
    this.tasks.set(this.filter.filterTasks(this.group(), this.originalTasks));
    this.uniqueValues = this.filter.getUniqueValues();
    this.filter.onFilterApplied$.next();
}
