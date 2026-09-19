import type { SearchService } from '../search.service';
import type { GroupMatch, Match } from '../types';
import { Status } from '../Status';

export function doAppSearch(service: SearchService) {
    return (
        searchTerm: string,
    ): void => {
        service.searchTerm = searchTerm?.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        if(!service.searchTerm || service.searchTerm.length < 2) {
            service.searchStatus.set(Status.Failure);
            service.searchError.set(service.svcTranslate.instant('APP.SEARCH.TOO_SHORT'));
        }
        else {
            const matches: Match[] = service.searchTasks(searchTerm, service.expanded ?? false, true);
            const groupMatches: GroupMatch[] = service.searchGroups(searchTerm, true);

            if(matches.length > 0 || groupMatches.length > 0) {
                service.searchStatus.set(Status.Success);
                service.searchError.set(null);
                service.searchTaskMatches.set(matches);
                service.searchGroupMatches.set(groupMatches);
            }
            else if(!service.expanded) {
                service.toggleSearchDepth();
            }
            else {
                service.searchStatus.set(Status.Failure);
                service.searchError.set(service.svcTranslate.instant('APP.SEARCH.NO_RESULTS'));
            }
        }
    };
}
