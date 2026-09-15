import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'com-gamer-escape-action',
    styleUrls: ['../action.scss'],
    imports: [
        Tooltip,
        TranslatePipe
    ],
    template: `
        <div
            class="action icon gamer-escape-icon"
            tooltipPosition="top"
            [pTooltip]="'APP.TABLE.ROW_ACTION.ESCAPE' | translate"
            (click)="searchGamerEscape()"
        ></div>
    `
})
export class GamerEscapeActionComponent {
    private svcElectron = inject(ElectronService);

    @Input({ required: true }) task!: Task;
    @Output() clicked = new EventEmitter<void>();

    searchGamerEscape(): void {
        this.svcElectron.searchGamerEscape(this.task.name);
        this.clicked.emit();
    }

}
