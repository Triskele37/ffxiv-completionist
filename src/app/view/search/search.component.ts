import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Match, SearchService, Status } from '@service/search/search.service';

type ExpandedRows = {
    [key: string]: boolean;
};

@Component({
    selector: 'xiv-search-results',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    Status = Status;

    willCollapseAll: boolean = false;
    expandedRows: ExpandedRows = {};
    rowKeys: string[];

    constructor(public svcSearch: SearchService) {
    }

    ngOnInit() {
        this.sub = this.svcSearch.searchMatches$.subscribe((tasks) => {
            this.setRowsExpanded(tasks, true);
        });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }

    setRowsExpanded(tasks: Match[], expanded: boolean): void {
        this.rowKeys = tasks.map((match) => match.task._parent.fullStorageKey);

        this.expandedRows = this.rowKeys.reduce((acc, key) => {
            acc[key] = expanded;
            return acc;
        }, {});

        this.willCollapseAll = expanded;
    }

    evaluateToggleAll(wasCollapse: boolean): void {
        const hasAnyCollapsed = this.rowKeys.some((key) => !this.expandedRows[key]);
        const hasAnyExpanded = this.rowKeys.some((key) => this.expandedRows[key]);

        if(wasCollapse) this.willCollapseAll = hasAnyExpanded;
        else this.willCollapseAll = !hasAnyCollapsed;
    }

    expandSearch(): void {
        this.svcSearch.toggleSearchDepth();
    }
}
