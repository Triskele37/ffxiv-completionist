import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';

import { SearchService } from '@service/search/search.service';
import { Status } from '@service/search/SearchTypes';
import { TableService } from '@service/table/table.service';

import { TaskSearchResultsComponent } from './task-search-results/task-search-results.component';
import { GroupSearchResultsComponent } from './group-search-results/group-search-results.component';

@Component({
    selector: 'com-search-results',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    imports: [
        TranslatePipe,
        Tabs,
        TabList,
        Tab,
        TabPanels,
        TabPanel,

        TaskSearchResultsComponent,
        GroupSearchResultsComponent
    ],
    providers: [
        TableService
    ]
})
export class SearchComponent {
    svcSearch = inject(SearchService);

    Status = Status;

    taskMatches = computed(() => this.svcSearch.searchTaskMatches().length);
    groupMatches = computed(() => this.svcSearch.searchGroupMatches().length);
}
