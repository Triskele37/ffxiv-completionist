import type { Match } from '../SearchTypes';
import type { SearchServiceContext } from '../types';

export function searchTasks(this: SearchServiceContext) {
    return (searchTerm: string, expanded: boolean, partial: boolean): Match[] => {
        return this.searchTasksForTerm(this.svcData.data, searchTerm, expanded, partial);
    };
}
