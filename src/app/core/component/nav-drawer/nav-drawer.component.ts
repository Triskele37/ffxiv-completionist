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
    mainMenu = MainMenu;

    items: MenuItem[] = [
        this.addSubGroup(MainMenu)
    ];

    constructor(private svcNavigation: NavigationService) {
    }

    ngOnInit() {
        data.subGroups.forEach((group) => {
            this.items.push(this.addSubGroup(group));
        });
    }

    private addSubGroup(group: DataGroup, depth: number = 1): MenuItem {
        const item: MenuItem = { label: group.name };

        if(group.subGroups) {
            item.items = group.subGroups.map(
                (subGroup) => this.addSubGroup(subGroup, depth + 1)
            );
        }

        item.command = () => {
            this.svcNavigation.setCrumbAt(depth, group.name);
            this.svcNavigation.setSelectedGroup(group);
        };

        return item;
    }
}
