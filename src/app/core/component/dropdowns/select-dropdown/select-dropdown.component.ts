import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { ElectronService } from '@service/electron/electron.service';

@Component({
    selector: 'xiv-select-dropdown',
    templateUrl: './select-dropdown.component.html',
    styleUrls: [
        '../dropdown.scss',
        './select-dropdown.component.scss'
    ]
})
export class SelectDropdownComponent {
    @Input() group: DataGroup;
    @Input() filteredTasks: { [key: string]: Task };
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

    selectedIds() {
        const selectedIds = [];
        for(let id in this.filteredTasks) {
            if(this.filteredTasks[id].selected) {
                if(typeof id === 'string') {
                    // For show all ids: 0x1x12345
                    while(id.indexOf('x') !== -1) {
                        id = id.substr(id.indexOf('x') + 1);
                    }
                }

                selectedIds.push(id);
            }
        }
        return selectedIds;
    }

    onSelectChange(select) {
        for(const id in this.filteredTasks) {
            if(select === null) {
                this.filteredTasks[id].selected = !this.filteredTasks[id].selected;
            }
            else {
                this.filteredTasks[id].selected = select;
            }
        }

        this.selectChange.emit();
    }

    openInGarland() {
        const ids = this.selectedIds();

        if(ids.length) {
            const baseUrl = 'https://www.garlandtools.org/db/#group';
            const idsString = ids.map((id) => `item/${id}`).join('|');

            // Create a pretty group name
            let parent = this.group._parent;
            while(parent._parent.isCraftingLogGroup) parent = parent._parent;
            const encodedGroupName = `${parent.name} > ${this.group.name}`.replace(' ', '%20');

            this.svcElectron.remote.shell.openExternal(`${baseUrl}/${encodedGroupName}{${idsString}}`);
        }
    }

    openInTeamcraft() {
        const ids = this.selectedIds();

        if(ids.length) {
            const baseUrl = 'https://www.ffxivteamcraft.com/import';
            const idsString = ids.map((id) => `${id},null,1`).join(';');

            this.svcElectron.remote.shell.openExternal(`${baseUrl}/${btoa(idsString)}`);
        }
    }
}
