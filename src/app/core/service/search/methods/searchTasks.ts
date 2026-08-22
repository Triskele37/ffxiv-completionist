import { Match } from '../SearchTypes';
import { SearchServiceContext } from '../types';

export function searchTasks(this: SearchServiceContext) {
    return (searchTerm: string, expanded: boolean, partial: boolean): Match[] => {
        return this.searchTasksForTerm(this.svcData.data, searchTerm, expanded, partial);
    };
}
