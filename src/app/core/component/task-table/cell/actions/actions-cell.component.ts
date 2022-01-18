import { Component, Input } from '@angular/core';

import { Task } from '@domain/Task';

@Component({
    selector: 'xiv-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss']
})
export class ActionsCellComponent {
    @Input() task: Task;
    @Input() rowIndex: number;
    expanded: boolean;

    onCloseActions() {
        this.expanded = false;
    }
}
