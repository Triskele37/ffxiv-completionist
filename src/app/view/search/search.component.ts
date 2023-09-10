import { Component, OnInit } from '@angular/core';

import { SearchService, Status } from '@service/search/search.service';

@Component({
    selector: 'xiv-search-results',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    Status = Status;

    taskMatches: number;
    groupMatches: number;

    constructor(public svcSearch: SearchService) {
    }

    ngOnInit() {
        this.svcSearch.searchTaskMatches$.subscribe((r) => this.taskMatches = r.length);
        this.svcSearch.searchGroupMatches$.subscribe((r) => this.groupMatches = r.length);
    }
}
