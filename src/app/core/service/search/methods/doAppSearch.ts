import type { GroupMatch, Match} from '../SearchTypes';
import { Status } from '../SearchTypes';
import type { SearchServiceContext } from '../types';

export function doAppSearch(this: SearchServiceContext) {
    return (searchTerm: string): void => {
        this.searchTerm = searchTerm?.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        if(!this.searchTerm || this.searchTerm.length < 2) {
            this.searchStatus.set(Status.Failure);
            this.searchError.set(this.svcTranslate.instant('APP.SEARCH.TOO_SHORT'));
        }
        else {
            const matches: Match[] = this.searchTasks(searchTerm, this.expanded ?? false, true);
            const groupMatches: GroupMatch[] = this.searchGroups(searchTerm, true);

            if(matches.length > 0 || groupMatches.length > 0) {
                this.searchStatus.set(Status.Success);
                this.searchError.set(null);
                this.searchTaskMatches.set(matches);
                this.searchGroupMatches.set(groupMatches);
            }
            else if(!this.expanded) {
                this.toggleSearchDepth();
            }
            else {
                this.searchStatus.set(Status.Failure);
                this.searchError.set(this.svcTranslate.instant('APP.SEARCH.NO_RESULTS'));
            }
        }
    };
}
