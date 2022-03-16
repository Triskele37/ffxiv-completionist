import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { DataService } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { BookmarkService } from '@service/bookmark/bookmark.service';
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
        private svcBookmark: BookmarkService,
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
                if(!group.isUiGroup) path = path.slice(1);

                this.updateCollapsed(this.items, path);
                this.items = [...this.items];
            }
        });

        this.svcBookmark.onGroupUpdated$.subscribe(this.updateBookmarkGroup.bind(this));
    }

    private updateBookmarkGroup() {
        const bookmarksIndex = this.items.findIndex(
            (item) => item.label === this.svcBookmark.group.name
        );

        this.items[bookmarksIndex] = this.addSubGroup(this.svcBookmark.group);
        this.items = [...this.items];
    }

    // Recursive: Builds a MenuItem for all data groups
    private addSubGroup(group: DataGroup, depth: number = 1): MenuItem {
        const item: MenuItem = { label: group.name };

        // Allow UI groups to hide themselves
        item.visible = group.visible;

        // Add "sub" MenuItems if this group has subGroups
        if(group.subGroups?.length) {
            item.items = group.subGroups.map(
                (g) => this.addSubGroup(g, depth + 1)
            );
        }

        // The callback when the MenuItem is clicked
        item.command = () => {
            const selectedGroup = this.svcNavigation.selectedGroup$.value;
            const sameGroup = selectedGroup.groupPath.join('.') === group.groupPath.join('.');

            this.svcNavigation.setSelectedGroup(sameGroup ? group._parent : group);
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
