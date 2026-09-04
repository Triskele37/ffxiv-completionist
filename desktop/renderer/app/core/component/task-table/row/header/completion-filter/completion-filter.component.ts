import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';

import { Completion } from '@constant';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-completion-filter',
    templateUrl: './completion-filter.component.html',
    styleUrls: ['./completion-filter.component.scss'],
    imports: [
        NgClass
    ]
})
export class CompletionFilterComponent {
    svcTable = inject(TableService);

    Completion = Completion;
}
