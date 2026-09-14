import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'com-garland-action',
    styleUrls: ['../action.scss'],
    imports: [
        Tooltip,
        TranslatePipe
    ],
    template: `
        <div
            class="action icon garland-icon"
            tooltipPosition="top"
            [pTooltip]="'APP.TABLE.ROW_ACTION.GARLAND' | translate"
            (click)="searchGarlandTools()"
        ></div>
    `
})
export class GarlandActionComponent {
    private svcElectron = inject(ElectronService);

    @Input({ required: true }) task!: Task;
    @Output() clicked = new EventEmitter<void>();

    searchGarlandTools(): void {
        this.svcElectron.searchGarlandTools(this.task.name);
        this.clicked.emit();
    }
}
