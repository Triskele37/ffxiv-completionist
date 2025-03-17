import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

@Component({
    selector: 'xiv-gamer-escape-action',
    templateUrl: './gamer-escape-action.component.html',
    styleUrls: [
        './gamer-escape-action.component.scss',
        '../action.scss'
    ]
})
export class GamerEscapeActionComponent {
    @Input() task: Task;
    @Output() onClick = new EventEmitter<void>();

    constructor(private svcElectron: ElectronService) {
    }

    searchGamerEscape(): void {
        this.svcElectron.sendSync(IPC_EVENT.SEARCH_GAMER_ESCAPE, this.task.name);
        this.onClick.emit();
    }

}
