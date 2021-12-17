import { Component, Input } from '@angular/core';

import { Task } from '@domain/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'xiv-external-cell',
    templateUrl: './external-cell.component.html',
    styleUrls: ['./external-cell.component.scss']
})
export class ExternalCellComponent {
    @Input() task: Task;

    gotoGamerEscape() {
        let name = this.task.name.replace(/ /g, '_');
        name = gamerEscapeSafeMap(name);

        ElectronService.remote.shell.openExternal(`https://ffxiv.gamerescape.com/wiki/${name}`);
    }

    gotoGarlandTools() {
        const name = this.task.name.replace(/ /g, '%20');
        ElectronService.remote.shell.openExternal(`https://www.garlandtools.org/db/#search/${name}`);
    }
}

function gamerEscapeSafeMap(name) {
    const match = (n, id) => this.task.name === n && this.task.id === id;

    if(match('Mending Fences', 143)) return `${name}_(Levequest)`;

    return name;
}
