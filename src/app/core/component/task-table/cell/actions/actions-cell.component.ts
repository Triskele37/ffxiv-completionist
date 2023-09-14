import { Component, Input } from '@angular/core';

import { Globals } from '@constant/Global';
import { Task } from '@model/Task';

@Component({
    selector: 'xiv-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss', './action.scss']
})
export class ActionsCellComponent {
    @Input() task: Task;
    @Input() rowIndex: number;

    showCopyId: boolean = Globals.config.isAdmin;
    expanded: boolean;

    onCloseActions(): void {
        this.expanded = false;
    }

    copyTaskId(): void {
        const path = this.task.fullStorageKey.replace('overall.', '');
        navigator.clipboard.writeText(path);
    }

}
