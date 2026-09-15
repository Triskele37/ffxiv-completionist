import type { SearchService } from '../search.service';
import type { Match } from '../types';

export function searchTasks(service: SearchService) {
    return (
        searchTerm: string,
        expanded: boolean,
        partial: boolean,
    ): Match[] => {
        return service.searchTasksForTerm(service.svcData.data, searchTerm, expanded, partial);
    };
}
