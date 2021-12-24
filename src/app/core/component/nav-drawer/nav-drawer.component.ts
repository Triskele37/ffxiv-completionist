import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { data } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';
import { MainMenu } from '../../../view/main-menu';

@Component({
    selector: 'xiv-nav-drawer',
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {
    items: MenuItem[] = [this.addSubGroup(MainMenu)];

    constructor(private svcNavigation: NavigationService) {
    }

    ngOnInit() {
        data.subGroups.forEach((group) => this.items.push(this.addSubGroup(group)));

        // Collapse all groups not in the direct path of the selected group
        this.svcNavigation.selectedGroup$.subscribe((group) => {
            this.collapseItems(this.items, group.groupPath.slice(1));
            this.items = [...this.items];
        });
    }

    private addSubGroup(group: DataGroup, depth: number = 1): MenuItem {
        const item: MenuItem = { label: group.name };

        if(group.subGroups) {
            item.items = group.subGroups.map((g) => this.addSubGroup(g, depth + 1));
        }

        item.command = () => this.svcNavigation.setCrumbAt(depth, group.name);

        return item;
    }

    private collapseItems(items: MenuItem[], path: string[]): void {
        const name = path.shift();
        items.forEach((menuItem) => {
            if(menuItem.label !== name) menuItem.expanded = false;
            if(menuItem.items) this.collapseItems(menuItem.items, [...path]);
        });
    }
}
