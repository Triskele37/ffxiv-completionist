import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'com-console-games-action',
    styleUrls: ['../action.scss'],
    imports: [
        Tooltip,
        TranslatePipe
    ],
    template: `
        <div
            class="action icon console-games-icon"
            tooltipPosition="top"
            [pTooltip]="'APP.TABLE.ROW_ACTION.CONSOLE' | translate"
            (click)="searchConsoleGamesWiki()"
        ></div>
    `
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
