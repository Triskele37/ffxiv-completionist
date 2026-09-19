import type { SearchService } from '../search.service';

export function toggleSearchDepth(service: SearchService) {
    return (): void => {
        if(!service.searchTerm) return;

        service.expanded = !service.expanded;
        service.doAppSearch(service.searchTerm);
    };
}
