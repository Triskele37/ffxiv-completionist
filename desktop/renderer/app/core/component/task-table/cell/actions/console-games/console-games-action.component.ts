import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';

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
    private svcElectron = inject(ElectronService);

    @Input({ required: true }) task!: Task;
    @Output() clicked = new EventEmitter<void>();

    searchConsoleGamesWiki(): void {
        this.svcElectron.searchConsoleGames(this.task.name);
        this.clicked.emit();
    }

}
