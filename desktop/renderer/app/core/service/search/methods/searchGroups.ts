import type { SearchServiceContext } from '../types';

export function searchGroups(this: SearchServiceContext) {
    return (searchTerm: string, partial: boolean) => {
        return this.searchGroupsForTerm(this.svcData.data, searchTerm, partial);
    };
}
