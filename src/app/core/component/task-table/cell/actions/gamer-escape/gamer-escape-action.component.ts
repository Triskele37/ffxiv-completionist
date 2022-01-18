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

    gotoGamerEscape() {
        let name = this.task.name.replace(/ /g, '_');
        name = this.gamerEscapeSafeMap(name);

        this.svcElectron.remote.shell.openExternal(`https://ffxiv.gamerescape.com/wiki/${name}`);
        this.onClick.emit();
    }

    gamerEscapeSafeMap(name) {
        const match = (n, id) => this.task.name === n && this.task.id === id;

        if(match('Mending Fences', 143)) return `${name}_(Levequest)`;

        return name;
    }
}
