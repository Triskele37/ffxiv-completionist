import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@domain/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'xiv-console-games-action',
    templateUrl: './console-games-action.component.html',
    styleUrls: [
        './console-games-action.component.scss',
        '../action.scss'
    ]
})
export class ConsoleGamesActionComponent {
    @Input() task: Task;
    @Output() onClick = new EventEmitter<void>();

    constructor(private svcElectron: ElectronService) {
    }

    searchConsoleGamesWiki(): void {
        this.svcElectron.ipcRenderer.sendSync('search-console-games', this.task.name);
        this.onClick.emit();
    }

}
