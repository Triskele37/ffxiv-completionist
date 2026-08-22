import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

@Component({
    selector: 'com-garland-action',
    templateUrl: './garland-action.component.html',
    styleUrls: [
        './garland-action.component.scss',
        '../action.scss'
    ],
    imports: [
        Tooltip,
        TranslatePipe
    ],
})
export class GarlandActionComponent {
    @Input({ required: true }) task!: Task;
    @Output() onClick = new EventEmitter<void>();

    constructor(private svcElectron: ElectronService) {
    }

    searchGarlandTools(): void {
        this.svcElectron.sendSync(IPC_EVENT.SEARCH_GARLAND_TOOLS, this.task.name);
        this.onClick.emit();
    }
}
