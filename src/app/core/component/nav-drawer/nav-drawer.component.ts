import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { BookmarkService } from '@service/bookmark/bookmark.service';
import { MainMenuService } from '@service/main-menu/main-menu.service';
import { NavigationService } from '@service/navigation/navigation.service';

@Component({
    selector: 'xiv-nav-drawer',
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {
    items: MenuItem[] = [];

    constructor(
        private svcData: DataService,
        private svcBookmark: BookmarkService,
        private svcMainMenu: MainMenuService,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnInit(): void {
        this.buildMenuItems();
        this.addSubscriptions();
    }

    addSubscriptions(): void {
        // Collapse all groups not in the direct path of the selected group
        this.svcNavigation.selectedGroup$.subscribe((group) => {
            let path = group?.groupPath;
            if(path) {
                // Remove the "overall" data container
                if(!group.isUiGroup) path = path.slice(1);

                this.updateCollapsed(this.items, path);

                // Mutate "items" so changes are detected
                this.items = [...this.items];
            }
        });

        this.svcBookmark.onGroupUpdated$.subscribe(this.updateBookmarkGroup.bind(this));
    }

    buildMenuItems(): void {
        this.items = [
            this.addSubGroup(this.svcMainMenu.data)
        ];

        this.svcData.data.subGroups.forEach((subGroup) => {
            this.items.push(this.addSubGroup(subGroup));
        });
    }

    updateBookmarkGroup() {
        const bookmarksIndex = this.items.findIndex(
            (item) => item.state.name === this.svcBookmark.group.name
        );

        this.items[bookmarksIndex] = this.addSubGroup(this.svcBookmark.group);

        // Mutate "items" so changes are detected
        this.items = [...this.items];
    }

    // Recursive: Builds a MenuItem for all data groups
    addSubGroup(group: DataGroup, depth: number = 1): MenuItem {
        const item: MenuItem = {
            label: this.getSubGroupLabel(group),
            escape: false,
            visible: group.visible, // Allow UI groups to hide themselves,
            state: {
                name: group.name
            }
        };

        group.onUpdated$.subscribe(() => {
            item.label = this.getSubGroupLabel(group);

            // Mutate "items" so changes are detected
            this.items = [...this.items];
        });

        // Add "sub" MenuItems if this group has subGroups
        if(group.subGroups?.size) {
            item.items = [];
            group.subGroups.forEach((subGroup) => {
                item.items.push(this.addSubGroup(subGroup, depth + 1));
            });
        }

        // The callback when the MenuItem is clicked
        item.command = () => {
            const selectedGroup = this.svcNavigation.selectedGroup$.value;
            const sameGroup = selectedGroup.groupPath.join('.') === group.groupPath.join('.');

            this.svcNavigation.setSelectedGroup(sameGroup ? group._parent : group);
        };

        return item;
    }

    getSubGroupLabel(group: DataGroup): string {
        let label = `<span>${group.name}</span>`;

        // Don't modify UI groups
        if(group.isUiGroup) return label;

        if(group.percentComplete === '100.00') {
            label += '<i class="mi mi-star"></i>';
        }
        else if(group.remaining === '0') {
            label += '<i class="mi mi-star empty"></i>';
        }

        return label;
    }

    // Recursive: Updates the collapsed state of all MenuItems to match "path"
    updateCollapsed(items: MenuItem[], path: string[]): void {
        const name = path.shift();

        items.forEach((menuItem) => {
            menuItem.expanded = menuItem.state.name === name;
            if(menuItem.items) this.updateCollapsed(menuItem.items, [...path]);
        });
    }
}
