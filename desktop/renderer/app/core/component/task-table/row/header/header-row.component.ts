import { Component, inject } from '@angular/core';
import { SortableColumn, SortIcon } from 'primeng/table';

import { Completion } from '@constant';
import { TableService } from '@service/table/table.service';

import { CompletionFilterComponent } from './completion-filter/completion-filter.component';
import { InputFilterComponent } from './input-filter/input-filter.component';
import { OptionFilterComponent } from './option-filter/option-filter.component';

@Component({
    selector: 'com-header-row',
    templateUrl: './header-row.component.html',
    styleUrls: ['./header-row.component.scss'],
    imports: [
        SortIcon,
        SortableColumn,

        CompletionFilterComponent,
        InputFilterComponent,
        OptionFilterComponent,
    ]
})
export class HeaderRowComponent {
    svcTable = inject(TableService);

    Completion = Completion;
}
