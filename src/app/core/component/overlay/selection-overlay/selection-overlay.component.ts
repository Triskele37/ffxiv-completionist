import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'xiv-selection-overlay',
    templateUrl: './selection-overlay.component.html',
    styleUrls: [
        '../overlay.scss',
        './selection-overlay.component.scss'
    ]
})
export class SelectionOverlayComponent {
    @Input() group: DataGroup;
    @Input() tasks: Task[];
    @Output() selectChange = new EventEmitter<void>();

    isVisible: boolean = false;

    constructor(private svcElectron: ElectronService) {
    }

    onMouseEnter(): void {
        this.isVisible = true;
    }

    onMouseLeave(): void {
        this.isVisible = false;
    }

    private selectedIds(): number[] {
        return this.tasks
            .filter((t) => t.selected)
            .map((t) => t.id);
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
        const ids = this.selectedIds();

        if(ids.length) {
            const baseUrl = 'https://www.garlandtools.org/db/#group';
            const idsString = ids.map((id) => `item/${id}`).join('|');

            // Create a pretty group name
            let parent = this.group._parent;
            while(parent._parent._parent?.isCraftingLogGroup) {
                parent = parent._parent;
            }

            const encodedGroupName = `${parent.name} > ${this.group.name}`.replace(' ', '%20');

            this.svcElectron.remote.shell.openExternal(`${baseUrl}/${encodedGroupName}{${idsString}}`);
        }
    }

    openInTeamcraft(): void {
        const ids = this.selectedIds();

        if(ids.length) {
            const baseUrl = 'https://www.ffxivteamcraft.com/import';
            const idsString = ids.map((id) => `${id},null,1`).join(';');

            this.svcElectron.remote.shell.openExternal(`${baseUrl}/${btoa(idsString)}`);
        }
    }
}
