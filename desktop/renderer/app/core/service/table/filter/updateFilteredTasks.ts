import type { TableService } from '../table.service';

export function updateFilteredTasks(service: TableService) {
    return (): void => {
        if(service.originalTasks.length || service.tasks().length) {
            const filteredTasks = service.filterTasks(service.group(), service.originalTasks);
            service.tasks.set(filteredTasks);
            service.uniqueValues = service.getUniqueValues();
            service.onFilterApplied$.next();
        }
    };
}
