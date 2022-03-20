import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';

@Component({
    selector: 'xiv-task-table-toolbar',
    templateUrl: './task-table-toolbar.component.html',
    styleUrls: ['./task-table-toolbar.component.scss']
})
export class TaskTableToolbarComponent {
    @Input() group: DataGroup;
    @Input() tasks: Task[];
    @Input() totalTasks: number;

    @Output() onDataChange = new EventEmitter<void>();
}
