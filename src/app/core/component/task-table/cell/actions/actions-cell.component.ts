import { Component, Input } from '@angular/core';

import { Task } from '@domain/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'xiv-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss']
})
export class ActionsCellComponent {
    @Input() task: Task;
    @Input() rowIndex: number;
    expanded: boolean;

    constructor(private svcElectron: ElectronService) {
    }

    gotoGamerEscape() {
        let name = this.task.name.replace(/ /g, '_');
        name = this.gamerEscapeSafeMap(name);

        this.svcElectron.remote.shell.openExternal(`https://ffxiv.gamerescape.com/wiki/${name}`);
    }

    gamerEscapeSafeMap(name) {
        const match = (n, id) => this.task.name === n && this.task.id === id;

        if(match('Mending Fences', 143)) return `${name}_(Levequest)`;

        return name;
    }

    gotoGarlandTools() {
        const name = this.task.name.replace(/ /g, '%20');
        this.svcElectron.remote.shell.openExternal(`https://www.garlandtools.org/db/#search/${name}`);
    }
}
