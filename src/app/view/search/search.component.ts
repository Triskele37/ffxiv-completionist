import { Component } from '@angular/core';

import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService } from '@service/search/search.service';
import { MatchGroup, Status } from '@service/search/types';

@Component({
    selector: 'xiv-search-results',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    Status = Status;

    constructor(
        private svcNavigation: NavigationService,
        public svcSearch: SearchService
    ) {
    }

    onJumpToGroup(match: MatchGroup): void {
        this.svcNavigation.setBreadcrumbs(match.path.split(' > '));
    }
}
