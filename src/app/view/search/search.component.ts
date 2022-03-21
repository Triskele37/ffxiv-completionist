import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { APP_CONFIG } from '../../../environments/environment';
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
    showKey: boolean = APP_CONFIG.showKeys;

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

        // Collapsed rows must use 'null' as the falsy value
        this.expandedRows = this.rowKeys.reduce((acc, key) => {
            acc[key] = expanded ? true : null;
            return acc;
        }, {});

        this.willCollapseAll = expanded;
    }

    evaluateToggleAll($event, wasCollapse: boolean): void {
        // PrimeNG deletes the key when collapsed, add it back in as null if collapsed
        const rowKey = $event.data.task._parent.fullStorageKey;
        if(!this.expandedRows[rowKey]) this.expandedRows[rowKey] = null;

        const hasAnyCollapsed = this.rowKeys.some((key) => !this.expandedRows[key]);
        const hasAnyExpanded = this.rowKeys.some((key) => this.expandedRows[key]);

        if(wasCollapse) this.willCollapseAll = hasAnyExpanded;
        else this.willCollapseAll = !hasAnyCollapsed;
    }

    expandSearch(): void {
        this.svcSearch.toggleSearchDepth();
    }
}
