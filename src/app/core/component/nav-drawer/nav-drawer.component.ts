import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { UIGroup } from '@domain/UIGroup';
import { NavigationService } from '@service/navigation/navigation.service';
import { MainMenu } from '../../../view/main-menu';

@Component({
    selector: 'xiv-nav-drawer',
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {
    items: MenuItem[] = [this.addSubGroup(MainMenu)];

    constructor(
        private svcData: DataService,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnInit() {
        // Build the initial menu items
        this.svcData.data.subGroups.forEach((group) => this.items.push(this.addSubGroup(group)));

        // Collapse all groups not in the direct path of the selected group
        this.svcNavigation.selectedGroup$.subscribe((group) => {
            let path = group?.groupPath;
            if(path) {
                if(group instanceof DataGroup) path = path.slice(1);

                this.updateCollapsed(this.items, path);
                this.items = [...this.items];
            }
        });
    }

    // Recursive: Builds a MenuItem for all data groups
    private addSubGroup(group: DataGroup | UIGroup, depth: number = 1): MenuItem {
        const item: MenuItem = { label: group.name };

        // Add "sub" MenuItems if this group has subGroups
        if(group.subGroups) {
            item.items = group.subGroups.map(
                (g) => this.addSubGroup(g, depth + 1)
            );
        }

        // The callback when the MenuItem is clicked
        item.command = () => {
            const currentPath = this.svcNavigation.breadcrumbs$.value.join('.');
            const groupPath = group.groupPath.join('.');

            if(currentPath === groupPath) {
                // Current selected group was clicked again, close
                this.svcNavigation.popOne();
            }
            else {
                this.svcNavigation.setCrumbAt(depth, group.name);
            }
        };

        return item;
    }

    // Recursive: Updates the collapsed state of all MenuItems to match "path"
    private updateCollapsed(items: MenuItem[], path: string[]): void {
        const name = path.shift();
        items.forEach((menuItem) => {
            menuItem.expanded = menuItem.label === name;
            if(menuItem.items) this.updateCollapsed(menuItem.items, [...path]);
        });
    }
}
