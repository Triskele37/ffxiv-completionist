import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { DataService } from '@data';
import { DataGroup } from '@model/DataGroup';
import { getGroupPath } from '@model/DataGroup/children/getGroupPath';
import { isComplete, isEmpty } from '@model/DataGroup/completion/metrics';
import { isHiddenGroup } from '@model/DataGroup/ui/isHiddenGroup';
import { BookmarkService } from '@service/bookmark/bookmark.service';
import { ConfigStoreService } from '@service/store/config-store.service';
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
        private svcBookmark: BookmarkService,
        private svcConfig: ConfigStoreService,
        private svcData: DataService,
        private svcMainMenu: MainMenuService,
        private svcNavigation: NavigationService
    ) {
    }

    ngOnInit(): void {
        this.buildMenuItems();
        this.addSubscriptions();
    }

    addSubscriptions(): void {
        // Update items if any config changes, some affect display
        this.svcConfig.navSettingUpdated$.subscribe(this.buildMenuItems.bind(this));

        // Collapse all groups not in the direct path of the selected group
        this.svcNavigation.selectedGroup$.subscribe((group) => {
            let path = group ? getGroupPath(group) : null;

            if(path) {
                // Remove the "overall" data container
                if(!group.isUiGroup) path = path.slice(1);

                this.items = this.updateItemCollapse(this.items, path);
            }
        });

        // Update visible state for "show completed/empty" settings
        this.svcData.data.onUpdated$.subscribe(() => {
            this.items = this.updateItemFromDataChange(this.items);
        });

        this.svcBookmark.onGroupUpdated$.subscribe(this.updateBookmarkGroup.bind(this));
    }

    buildMenuItems(): void {
        this.items = [this.addSubGroup(this.svcMainMenu.data)];

        this.svcData.data.subGroups.forEach((subGroup) => {
            this.items.push(this.addSubGroup(subGroup));
        });
    }

    updateBookmarkGroup() {
        const bookmarksIndex = this.items.findIndex(
            (item) => item.state.group.name === this.svcBookmark.group.name
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
            // Allow UI groups to hide themselves
            visible: group.visible && !isHiddenGroup(group, this.svcConfig),
            state: { group }
        };

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
            const selectedPath = getGroupPath(selectedGroup).join('.');
            const addingPath = getGroupPath(group).join('.');
            const isSameGroup = selectedPath === addingPath;

            this.svcNavigation.setSelectedGroup(isSameGroup ? group._parent : group);
        };

        return item;
    }

    getSubGroupLabel(group: DataGroup): string {
        let label = `<span class="group-label">${group.name}</span>`;

        // Don't modify UI groups
        if(group.isUiGroup) return label;

        if(isComplete(group)) label += '<i class="mi mi-star"></i>';
        else if(isEmpty(group)) label += '<i class="mi mi-star empty"></i>';

        return label;
    }

    // Recursive: Updates the collapsed state of all MenuItems to match "path"
    updateItemCollapse(
        items: MenuItem[] | undefined,
        [...path]: string[],
    ): MenuItem[] | undefined {
        const name = path.shift();

        return items?.map((menuItem) => ({
            ...menuItem,
            expanded: menuItem.state.group.name === name,
            items: this.updateItemCollapse(menuItem.items, path)
        }));
    }

    // Recursive: Updates the visible state of all MenuItems
    updateItemFromDataChange(items: MenuItem[] | undefined): MenuItem[] | undefined {
        return items?.map((menuItem) => ({
            ...menuItem,
            label: this.getSubGroupLabel(menuItem.state.group),
            visible: menuItem.state.group.visible && !isHiddenGroup(menuItem.state.group, this.svcConfig),
            items: this.updateItemFromDataChange(menuItem.items)
        }));
    }
}
