import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';

@Component({
    selector: 'xiv-group-selector',
    templateUrl: './group-selector.component.html'
})
export class GroupSelectorComponent implements OnInit {
    @Input() group: DataGroup;
    @Output() onGroupChange = new EventEmitter<DataGroup>();

    items: MenuItem[];

    constructor(
        private svcData: DataService
    ) {
    }

    ngOnInit() {
        if(!this.group) this.group = this.svcData.data;
        this.items = this.addGroup(this.svcData.data.subGroups);
    }

    addGroup(groups: Map<string, DataGroup>): MenuItem[] {
        const items: MenuItem[] = [];

        groups.forEach((group) => {
            const menuItem: MenuItem = { label: group.name };

            if(group.subGroups) {
                menuItem.items = this.addGroup(group.subGroups);
            }
            else {
                menuItem.command = () => {
                    this.group = group;
                    this.onGroupChange.emit(group);
                };
            }

            items.push(menuItem);
        });

        return items;
    }

}
