import { Component, effect, OnDestroy, OnInit, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { RowGroupHeader, RowToggler, Table } from 'primeng/table';
import { Subscription } from 'rxjs';

import { ChainOverlayComponent } from '@component/overlay/chain-overlay/chain-overlay.component';
import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { CompleteCellComponent } from '@component/task-table/cell/complete/complete-cell.component';
import { ConfigStoreService } from '@service/store/config-store.service';
import { SearchService } from '@service/search/search.service';
import { Match } from '@service/search/SearchTypes';
import { ExpandedRows } from '@service/table/rowGroup/_types';

@Component({
    selector: 'com-task-search-results',
    templateUrl: './task-search-results.component.html',
    styleUrls: ['./task-search-results.component.scss'],
    imports: [
        ButtonGroup,
        ButtonDirective,
        TranslatePipe,
        Table,
        NgClass,
        RowGroupHeader,
        RowToggler,

        ChainOverlayComponent,
        ContentLinkComponent,
        CompleteCellComponent
    ],
})
export class TaskSearchResultsComponent implements OnInit, OnDestroy {
    svcConfigStore = inject(ConfigStoreService);
    svcSearch = inject(SearchService);

    private storeSub?: Subscription;

    showKey = signal(false);

    willCollapseAll: boolean = false;
    expandedRows = signal<ExpandedRows>({});

    hasResults?: boolean;

    constructor() {
        effect(() => {
            const taskMatches = this.svcSearch.searchTaskMatches()
            this.hasResults = !!taskMatches;
            this.setRowsExpanded(true);
        });

        this.showKey.set(this.svcConfigStore.data?.isAdmin ?? false);
    }

    ngOnInit(): void {
        this.storeSub = this.svcConfigStore.updated$.subscribe((data) => {
            this.showKey.set(data.isAdmin);
        });
    }

    ngOnDestroy(): void {
        this.storeSub?.unsubscribe();
    }

    expandSearch(): void {
        this.svcSearch.toggleSearchDepth();
    }

    setRowsExpanded(expanded: boolean): void {
        const taskMatches = this.svcSearch.searchTaskMatches();

        if(expanded) {
            this.expandedRows.set(taskMatches
                .map((match) => match.task._parent.fullStorageKey)
                .reduce((acc, key) => {
                    acc[key] = true;
                    return acc;
                }, {} as ExpandedRows)
            );
        }
        else {
            this.expandedRows.set({});
        }

        this.willCollapseAll = expanded;
    }

    evaluateToggleAll(): void {
        const expandedRowCount = Object.keys(this.expandedRows()).length;
        this.willCollapseAll = expandedRowCount > 0;
    }

    onCopyPathClick(match: Match): void {
        const path = match.task.fullStorageKey.replace('overall.', '');
        navigator.clipboard.writeText(path);
    }

}
