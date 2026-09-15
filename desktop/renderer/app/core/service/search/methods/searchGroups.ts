import type { SearchService } from '../search.service';

export function searchGroups(service: SearchService) {
    return (
        searchTerm: string,
        partial: boolean,
    ) => {
        return service.searchGroupsForTerm(service.svcData.data, searchTerm, partial);
    };
}
