import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

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
        this.svcElectron.sendSync(IPC_EVENT.SEARCH_CONSOLE_GAMES, this.task.name);
        this.onClick.emit();
    }

}
