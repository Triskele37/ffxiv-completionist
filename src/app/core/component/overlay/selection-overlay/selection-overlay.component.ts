import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { Divider } from 'primeng/divider';

import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

import { Overlay } from '../Overlay';

@Component({
    selector: 'com-selection-overlay',
    templateUrl: './selection-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './selection-overlay.component.scss'
    ],
    imports: [
        ButtonDirective,
        Divider,
        TranslatePipe
    ]
})
export class SelectionOverlayComponent extends Overlay {
    private svcElectron = inject(ElectronService);

    @Input({ required: true }) group!: DataGroup;
    @Input({ required: true }) tasks!: Task[];
    @Output() selectChange = new EventEmitter<void>();

    getSelectedItemResultIds(): number[] {
        return this.tasks
            .filter((t) => t.selected())
            .map((t) => t._itemId)
            .filter((id) => id);
    }

    // Passing null means 'invert' selected value
    onSelectChange(select: boolean | null): void {
        this.tasks.forEach((task) => {
            if(select === null) task.selected.set(!task.selected());
            else task.selected.set(select);
        });

        this.selectChange.emit();
    }

    openInGarland(): void {
        const ids = this.getSelectedItemResultIds();

        if(ids.length) {
            // Create a pretty group name
            let parent = this.group._parent;
            while(parent?._parent?._parent?.isCraftingLogGroup) parent = parent._parent;
            const groupName = `${parent?.name} - ${this.group.name}`;

            this.svcElectron.sendSync(IPC_EVENT.OPEN_IN_GARLAND_TOOLS, ids, groupName);
        }
    }

    openInTeamcraft(): void {
        const ids = this.getSelectedItemResultIds();

        if(ids.length) {
            this.svcElectron.sendSync(IPC_EVENT.OPEN_IN_TEAMCRAFT, ids);
        }
    }
}
