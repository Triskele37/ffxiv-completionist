import { Component, Input } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { RowGroupHeader, RowToggler } from 'primeng/table';

import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { Task } from '@model/Task';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-group-row',
    templateUrl: 'group-row.component.html',
    styleUrls: ['./group-row.component.scss'],
    imports: [
        ButtonDirective,
        ContentLinkComponent,
        RowGroupHeader,
        RowToggler
    ]
})
export class GroupRowComponent {
    @Input({ required: true }) task!: Task;
    @Input({ required: true }) expanded!: boolean;

    constructor(
        public svcTable: TableService,
    ) {
    }

}
