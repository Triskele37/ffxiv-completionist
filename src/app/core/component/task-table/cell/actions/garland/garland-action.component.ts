import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@domain/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'xiv-garland-action',
    templateUrl: './garland-action.component.html',
    styleUrls: [
        './garland-action.component.scss',
        '../action.scss'
    ]
})
export class GarlandActionComponent {
    @Input() task: Task;
    @Output() onClick = new EventEmitter<void>();

    constructor(private svcElectron: ElectronService) {
    }

    gotoGarlandTools() {
        const name = this.task.name.replace(/ /g, '%20');
        this.svcElectron.remote.shell.openExternal(`https://www.garlandtools.org/db/#search/${name}`);
        this.onClick.emit();
    }
}
