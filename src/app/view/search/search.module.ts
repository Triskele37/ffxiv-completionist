import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';

import { GroupSearchResultsModule } from './group-search-results/group-search-results.module';
import { TaskSearchResultsModule } from './task-search-results/task-search-results.module';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        TabViewModule,

        GroupSearchResultsModule,
        TaskSearchResultsModule,
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule {
}
