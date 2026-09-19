import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import type { TaskLink } from '@common/Features';
import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'com-task-link-action',
    styleUrls: ['../action.scss'],
    styles: `
        .task-link {
            background-size: cover !important;
            background-image: var(--icon);
        }
    `,
    imports: [
        Tooltip,
        TranslatePipe
    ],
    template: `
        <div
            class="action task-link"
            [style.--icon]="'url(game://assets/' + taskLink.icon + ')'"
            tooltipPosition="top"
            [pTooltip]="'GAME.FEATURE.TASK_LINK.' + taskLink.i18nKey | translate"
            (click)="onTaskLinkClick()"
        ></div>
    `
})
export class TaskLinkActionComponent {
    private svcElectron = inject(ElectronService);

    @Input({ required: true }) taskLink!: TaskLink;
    @Input({ required: true }) task!: Task;

    @Output() clicked = new EventEmitter<void>();

    onTaskLinkClick(): void {
        this.svcElectron.openExternalSingle(this.task[this.taskLink.use], this.taskLink.i18nKey);
        this.clicked.emit();
    }
}
