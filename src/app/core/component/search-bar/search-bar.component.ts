import { Component } from '@angular/core';

import { MainMenu } from '../../../view/main-menu';
import { SearchService } from '@service/search/search.service';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
    searchTerm: string;

    constructor(
        private svcNavigation: NavigationService,
        public svcSearch: SearchService,
    ) {
    }

    onHomeClick(): void {
        this.svcNavigation.setCrumbAt(1, MainMenu.name);
    }

    searchOnEnter(): void {
        this.onSearch();
    }

    onSearch(): void {
        this.svcSearch.doAppSearch(this.searchTerm);
    }
}
