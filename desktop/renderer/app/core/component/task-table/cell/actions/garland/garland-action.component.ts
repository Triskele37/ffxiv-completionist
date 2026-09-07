import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tooltip } from 'primeng/tooltip';

import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';

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
    private svcElectron = inject(ElectronService);

    @Input({ required: true }) task!: Task;
    @Output() clicked = new EventEmitter<void>();

    searchGarlandTools(): void {
        this.svcElectron.searchGarlandTools(this.task.name);
        this.clicked.emit();
    }
}
