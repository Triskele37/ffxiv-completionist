import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { LinkCellModule } from '@component/task-table/cell/link/link-cell.module';
import { GroupLinkModule } from '../../core/pipe/group-link.pipe';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        TableModule,
        TooltipModule,

        LinkCellModule,
        GroupLinkModule,
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule {
}
