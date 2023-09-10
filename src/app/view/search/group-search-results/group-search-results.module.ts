import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';

import { ContentLinkModule } from '@component/content-link/content-link.module';

import { GroupSearchResultsComponent } from './group-search-results.component';

@NgModule({
    declarations: [
        GroupSearchResultsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        TableModule,

        ContentLinkModule,
    ],
    exports: [
        GroupSearchResultsComponent
    ]
})
export class GroupSearchResultsModule {
}
