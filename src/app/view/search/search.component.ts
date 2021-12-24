import { Component, ViewChild } from '@angular/core';

import { NavigationService } from '@service/navigation/navigation.service';
import { SearchService } from '@service/search/search.service';

@Component({
    selector: 'xiv-search-results',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    @ViewChild('searchInput', { static: false }) set searchInput(ref) {
        if(!ref) return;

        // Auto-focus search input when search content is initialized
        //NOTE: May not auto-focus if search is already open
        ref.nativeElement.focus();
    };

    searchTerm = '';
    status = '';
    info = '';
    matches = [];

    constructor(
        private svcNavigation: NavigationService,
        private svcSearch: SearchService
    ) {
    }

    searchOnEnter() {
        this.onSearch();
    }

    onSearch() {
        const testTerm = this.searchTerm.toLowerCase().replace(/[^a-z0-9 ]/g, '');
        if(testTerm.length < 3) {
            this.status = 'failure';
            this.info = 'Please enter at least 3 characters';
            return;
        }

        this.status = 'active';
        this.info = 'Searching...';
        //TODO: this.$forceUpdate();

        // Timeout allows UI to update
        setTimeout(() => {
            this.matches = this.svcSearch.searchData(this.searchTerm);

            if(this.matches.length > 0) {
                this.status = 'success';
                this.info = `${this.matches.length} tasks found`;
            }
            else {
                this.status = 'failure';
                this.info = 'No tasks found';
            }
        }, 250);
    }

    onJumpToGroup(match) {
        this.svcNavigation.setBreadcrumbs(match.path.split(' > '));
    }
}
