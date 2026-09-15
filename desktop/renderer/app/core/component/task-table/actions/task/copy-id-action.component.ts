import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';

@Component({
    selector: 'com-copy-id-action',
    styleUrls: ['../action.scss'],
    imports: [
        NgIcon,
        Tooltip,
    ],
    template: `
        <ng-icon
            name="matContentCopy"
            class="action"
            pTooltip="Copy ID"
            tooltipPosition="top"
            (click)="copyTaskId()"
        ></ng-icon>
    `
})
export class CopyIdActionComponent {
    @Input({ required: true }) task!: Task;

    copyTaskId(): void {
        const path = this.task.fullStorageKey.replace('game.', '');
        navigator.clipboard.writeText(path);
    }

}
