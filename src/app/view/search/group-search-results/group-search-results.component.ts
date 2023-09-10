import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchService } from '@service/search/search.service';

@Component({
    selector: 'xiv-group-search-results',
    templateUrl: './group-search-results.component.html',
    styleUrls: ['./group-search-results.component.scss']
})
export class GroupSearchResultsComponent implements OnInit, OnDestroy {
    private sub: Subscription;

    hasResults: boolean;

    constructor(public svcSearch: SearchService) {
    }

    ngOnInit() {
        this.sub = this.svcSearch.searchGroupMatches$.subscribe((groups) => {
            this.hasResults = !!groups.length;
        });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}
