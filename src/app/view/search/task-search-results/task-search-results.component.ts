import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ConfigStoreService } from '@service/store/config-store.service';
import { Match, SearchService } from '@service/search/search.service';

type ExpandedRows = {
    [key: string]: boolean;
};

@Component({
    selector: 'xiv-task-search-results',
    templateUrl: './task-search-results.component.html',
    styleUrls: ['./task-search-results.component.scss']
})
export class TaskSearchResultsComponent implements OnInit, OnDestroy {
    private searchSub: Subscription;
    private storeSub: Subscription;

    rowKeys: string[];
    showKey: boolean;

    willCollapseAll: boolean = false;
    expandedRows: ExpandedRows = {};

    hasResults: boolean;

    constructor(
        public svcConfigStore: ConfigStoreService,
        public svcSearch: SearchService
    ) {
    }

    ngOnInit(): void {
        this.searchSub = this.svcSearch.searchTaskMatches$.subscribe((tasks) => {
            this.hasResults = !!tasks.length;
            this.setRowsExpanded(tasks, true);
        });

        this.storeSub = this.svcConfigStore.updated$.subscribe((data) => {
            this.showKey = data.isAdmin;
        });
    }

    ngOnDestroy(): void {
        this.searchSub?.unsubscribe();
        this.storeSub?.unsubscribe();
    }

    expandSearch(): void {
        this.svcSearch.toggleSearchDepth();
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

    onCopyPathClick(match: Match): void {
        const path = match.task.fullStorageKey.replace('overall.', '');
        navigator.clipboard.writeText(path);
    }

}
