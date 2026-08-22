import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

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
    @Input({ required: true }) task!: Task;
    @Output() onClick = new EventEmitter<void>();

    constructor(private svcElectron: ElectronService) {
    }

    searchGamerEscape(): void {
        this.svcElectron.sendSync(IPC_EVENT.SEARCH_GAMER_ESCAPE, this.task.name);
        this.onClick.emit();
    }

}
