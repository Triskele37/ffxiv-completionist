import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';

@Component({
    selector: 'com-copy-id-action',
    templateUrl: './copy-id-action.component.html',
    styleUrls: ['../action.scss'],
    imports: [
        NgIcon,
        Tooltip,
    ]
})
export class CopyIdActionComponent {
    @Input({ required: true }) task!: Task;

    copyTaskId(): void {
        const path = this.task.fullStorageKey.replace('overall.', '');
        navigator.clipboard.writeText(path);
    }

}
