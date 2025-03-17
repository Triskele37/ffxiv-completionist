import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { Task } from '@model/Task';
import { ElectronService, IPC_EVENT } from '@service/electron/electron.service';

import { Overlay } from '../Overlay';

@Component({
    selector: 'xiv-selection-overlay',
    templateUrl: './selection-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './selection-overlay.component.scss'
    ]
})
export class SelectionOverlayComponent extends Overlay {
    @Input() group: DataGroup;
    @Input() tasks: Task[];
    @Output() selectChange = new EventEmitter<void>();

    constructor(private svcElectron: ElectronService) {
        super();
    }

    getSelectedIds(): number[] {
        return this.tasks
            .filter((t) => t.selected)
            .map((t) => t.id);
    }

    getSelectedItemResultIds(): number[] {
        return this.tasks
            .filter((t) => t.selected)
            .map((t) => t._itemId)
            .filter((id) => id);
    }

    // Passing null means 'invert' selected value
    onSelectChange(select: boolean | null): void {
        this.tasks.forEach((task) => {
            if(select === null) task.selected = !task.selected;
            else task.selected = select;
        });

        this.selectChange.emit();
    }

    openInGarland(): void {
        const ids = this.getSelectedItemResultIds();

        if(ids.length) {
            // Create a pretty group name
            let parent = this.group._parent;
            while(parent._parent._parent?.isCraftingLogGroup) parent = parent._parent;
            const groupName = `${parent.name} - ${this.group.name}`;
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
