import { Component, effect, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonGroup } from 'primeng/buttongroup';
import { Table } from 'primeng/table';

import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { SearchService } from '@service/search/search.service';

@Component({
    selector: 'com-group-search-results',
    templateUrl: './group-search-results.component.html',
    imports: [
        ButtonGroup,
        Table,
        TranslatePipe,

        ContentLinkComponent
    ],
    styleUrls: ['./group-search-results.component.scss']
})
export class GroupSearchResultsComponent {
    svcSearch = inject(SearchService);

    hasResults?: boolean;

    constructor() {
        effect(() => {
            this.hasResults = !!this.svcSearch.searchGroupMatches().length;
        });
    }
}
