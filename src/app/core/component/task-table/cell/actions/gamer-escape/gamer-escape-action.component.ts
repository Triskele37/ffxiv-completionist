import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@domain/Task';
import { ElectronService } from '@service/electron/electron.service';

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
        this.svcElectron.ipcRenderer.sendSync('search-gamer-escape', this.task.name);
        this.onClick.emit();
    }

}
