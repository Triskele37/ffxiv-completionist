import { Component, Input, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ButtonDirective } from 'primeng/button';
import { RowGroupHeader, RowToggler } from 'primeng/table';

import { ContentLinkComponent } from '@component/content-link/content-link.component';
import type { Task } from '@model/Task';
import { TableService } from '@service/table/table.service';

@Component({
    selector: 'com-group-row',
    templateUrl: 'group-row.component.html',
    styleUrls: ['./group-row.component.scss'],
    imports: [
        NgTemplateOutlet,
        ButtonDirective,
        ContentLinkComponent,
        RowGroupHeader,
        RowToggler
    ]
})
export class GroupRowComponent {
    svcTable = inject(TableService);

    @Input({ required: true }) task!: Task;
    @Input({ required: true }) expanded!: boolean;

}
