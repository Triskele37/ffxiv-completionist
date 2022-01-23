import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Table } from 'primeng/table';

import { Match, SearchService, Status } from '@service/search/search.service';

@Component({
    selector: 'xiv-search-results',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    Status = Status;

    private awaitingExpandChange: boolean = false;
    private _resultsTable: Table;
    @ViewChild('resultsTable', { static: false }) set resultsTable(ref: Table) {
        if(!ref) return;
        this._resultsTable = ref;

        if(this.awaitingExpandChange) {
            this.setRowsExpanded(this.svcSearch.searchMatches$.value, true);
        }
    }

    constructor(public svcSearch: SearchService) {
    }

    ngOnInit() {
        this.sub = this.svcSearch.searchMatches$.subscribe((tasks) => {
            this.awaitingExpandChange = true;

            if(!this._resultsTable) return;
            this.setRowsExpanded(tasks, true);
        });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }

    setRowsExpanded(tasks: Match[], expanded: boolean): void {
        this._resultsTable.expandedRowKeys = tasks.reduce((acc, match) => {
            acc[match.task._parent.fullStorageKey] = expanded;
            return acc;
        }, {});

        this.awaitingExpandChange = false;
    }

    expandSearch(): void {
        this.svcSearch.toggleSearchDepth();
    }
}
