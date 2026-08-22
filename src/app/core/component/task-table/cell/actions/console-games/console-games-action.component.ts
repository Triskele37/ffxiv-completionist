import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

@Component({
    selector: 'com-console-games-action',
    templateUrl: './console-games-action.component.html',
    styleUrls: [
        './console-games-action.component.scss',
        '../action.scss'
    ],
    imports: [
        Tooltip,
        TranslatePipe
    ],
})
export class ConsoleGamesActionComponent {
    @Input({ required: true }) task!: Task;
    @Output() onClick = new EventEmitter<void>();

    constructor(private svcElectron: ElectronService) {
    }

    searchConsoleGamesWiki(): void {
        this.svcElectron.sendSync(IPC_EVENT.SEARCH_CONSOLE_GAMES, this.task.name);
        this.onClick.emit();
    }

}
