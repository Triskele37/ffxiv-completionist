import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

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

    searchGarlandTools(): void {
        this.svcElectron.sendSync(IPC_EVENT.SEARCH_GARLAND_TOOLS, this.task.name);
        this.onClick.emit();
    }
}
