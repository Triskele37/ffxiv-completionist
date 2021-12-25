import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Task } from '@domain/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'xiv-actions-cell',
    templateUrl: './actions-cell.component.html',
    styleUrls: ['./actions-cell.component.scss']
})
export class ActionsCellComponent {
    @Input() task: Task;

    items: MenuItem[] = [{
        tooltipOptions: { tooltipLabel: 'Gamer Escape', tooltipPosition: 'top' },
        icon: 'gamer-icon',
        command: () => this.gotoGamerEscape()
    }, {
        tooltipOptions: { tooltipLabel: 'Garland Tools', tooltipPosition: 'top' },
        icon: 'garland-icon',
        command: () => this.gotoGarlandTools()
    }];

    gotoGamerEscape() {
        let name = this.task.name.replace(/ /g, '_');
        name = this.gamerEscapeSafeMap(name);

        ElectronService.remote.shell.openExternal(`https://ffxiv.gamerescape.com/wiki/${name}`);
    }

    gamerEscapeSafeMap(name) {
        const match = (n, id) => this.task.name === n && this.task.id === id;

        if(match('Mending Fences', 143)) return `${name}_(Levequest)`;

        return name;
    }

    gotoGarlandTools() {
        const name = this.task.name.replace(/ /g, '%20');
        ElectronService.remote.shell.openExternal(`https://www.garlandtools.org/db/#search/${name}`);
    }
}
