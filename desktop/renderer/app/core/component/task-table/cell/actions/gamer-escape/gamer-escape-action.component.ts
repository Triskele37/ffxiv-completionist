import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { IPC_EVENT } from '@common/IPC_EVENT';
import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'com-gamer-escape-action',
    templateUrl: './gamer-escape-action.component.html',
    imports: [
        Tooltip,
        TranslatePipe
    ],
    styleUrls: [
        './gamer-escape-action.component.scss',
        '../action.scss'
    ]
})
export class GamerEscapeActionComponent {
    private svcElectron = inject(ElectronService);

    @Input({ required: true }) task!: Task;
    @Output() clicked = new EventEmitter<void>();

    searchGamerEscape(): void {
        this.svcElectron.sendSync(IPC_EVENT.SEARCH_GAMER_ESCAPE, this.task.name);
        this.clicked.emit();
    }

}
