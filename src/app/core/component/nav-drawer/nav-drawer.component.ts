import type { OnInit} from '@angular/core';
import { Component, effect, signal, untracked, ViewChild, inject } from '@angular/core';
import type { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { Tooltip } from 'primeng/tooltip';

import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import { getGroupPath } from '@model/DataGroup/getGroupPath';
import { isComplete, isEmpty } from '@model/DataGroup/metrics';
import { isHiddenGroup } from '@model/DataGroup/isHiddenGroup';
import { BookmarkService } from '@service/bookmark/bookmark.service';
import { ConfigStoreService } from '@service/store/config-store.service';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { MainMenuService } from '@service/main-menu/main-menu.service';
import { NavigationService } from '@service/navigation/navigation.service';
import { ViewToken } from '@view/view-token';

@Component({
    selector: 'com-nav-drawer',
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss'],
    imports: [
        PanelMenu,
        Tooltip
    ]
})
export class NavDrawerComponent implements OnInit {
    private svcBookmark = inject(BookmarkService);
    private svcConfig = inject(ConfigStoreService);
    private svcCustomContent = inject(CustomContentService);
    private svcData = inject(DataService);
    private svcMainMenu = inject(MainMenuService);
    svcNavigation = inject(NavigationService);

    // Making this a signal breaks the app
    items = signal<MenuItem[]>([]);

    constructor() {
        // Collapse all groups not in the direct path of the selected group
        effect(() => this.onSelectedGroupChange());
    }

    ngOnInit(): void {
        this.buildMenuItems();
        this.addSubscriptions();
    }

    addSubscriptions(): void {
        // Update items if any config changes, some affect display
        this.svcConfig.navSettingUpdated$.subscribe(this.buildMenuItems.bind(this));

        // Update visible state for "show completed/empty" settings
        this.svcData.data.onUpdated$.subscribe(() => {
            this.items.set(this.updateItemFromDataChange(this.items()) ?? []);
        });

        this.svcBookmark.onGroupUpdated$.subscribe(this.updateBookmarkGroup.bind(this));
        this.svcCustomContent.onGroupUpdated$.subscribe(this.updateCustomGroup.bind(this));
    }

    _panelMenu: PanelMenu | undefined;
    @ViewChild('panelMenu', { static: false }) set panelMenu(ref: PanelMenu) {
        if(!ref) return;
        this._panelMenu = ref;
    }

    onSelectedGroupChange() {
        const group = this.svcNavigation.selectedGroup();

        if(group) {
            // Remove the "overall" data container
            // if(!group.isUiGroup) path = path.slice(1);

            const currentItems = untracked(() => this.items());
            this.items.set(this.updateItemCollapse(currentItems));
            this._panelMenu?.cd.markForCheck();
        }
    }

    buildMenuItems(): void {
        const items = [this.addSubGroup(this.svcMainMenu.data)];

        this.svcData.data.subGroups?.forEach((subGroup) => {
            if(subGroup) items.push(this.addSubGroup(subGroup));
        });

        this.items.set(this.updateItemCollapse(items));
    }

    updateBookmarkGroup() {
        const groupIndex = this.items().findIndex(
            (item) => item.state?.group.name === this.svcBookmark.group.name
        );

        this.items.update((items) => {
            items[groupIndex] = this.addSubGroup(this.svcBookmark.group);
            return [...items];
        });
    }

    updateCustomGroup() {
        const groupIndex = this.items().findIndex(
            (item) => item.state?.group.name === this.svcCustomContent.group.name
        );

        this.items.update((items) => {
            items[groupIndex] = this.addSubGroup(this.svcCustomContent.group);
            return this.updateItemCollapse(items);
        });
    }

    // Recursive: Builds a MenuItem for all data groups
    addSubGroup(group: DataGroup, depth: number = 1): MenuItem {
        const item: MenuItem = {
            escape: false,
            // Allow UI groups to hide themselves
            visible: group.visible && !isHiddenGroup(group, this.svcConfig),
            state: {
                group,
                activeHelp: this.getActiveHelpKey(group),
                isComplete: isComplete(group),
                isEmpty: isEmpty(group),
            }
        };

        // Add "sub" MenuItems if this group has subGroups
        if(group.subGroups?.size) {
            item.items = [];
            group.subGroups.forEach((subGroup) => {
                if(subGroup) item.items?.push(this.addSubGroup(subGroup, depth + 1));
            });
        }

        // The callback when the MenuItem is clicked
        item.command = () => {
            const selectedGroup = this.svcNavigation.selectedGroup();
            if(!selectedGroup) return;

            const selectedPath = getGroupPath(selectedGroup).join('.');
            const addingPath = getGroupPath(group).join('.');
            const isSameGroup = selectedPath === addingPath;

            const newSelectedGroup = isSameGroup ? group._parent : group;
            if(newSelectedGroup) this.svcNavigation.setSelectedGroup(newSelectedGroup);
        };

        return item;
    }

    getActiveHelpKey(group: DataGroup): string {
        if(group.isUiGroup) {
            if(group.component === ViewToken.PatchNotes) return 'APP.ACTIVE_HELP.UPDATES';
            if(group.component === ViewToken.PatchView) return 'APP.ACTIVE_HELP.PATCH_VIEW';
            if(group.component === ViewToken.Random) return 'APP.ACTIVE_HELP.RANDOM_VIEW';
            if(group.component === ViewToken.ChainAnalysis) return 'APP.ACTIVE_HELP.CHAIN_ANALYSIS';
            if(group.component === ViewToken.Settings) return 'APP.ACTIVE_HELP.SETTINGS';
        }

        if(group._key === 'custom') return 'APP.ACTIVE_HELP.CUSTOM_VIEW';
        else if(group.isBookmarkGroup) return 'APP.ACTIVE_HELP.BOOKMARK_VIEW';
        return 'APP.ACTIVE_HELP.NAV_DRAWER.DRAWER_ITEM';
    }

    // Recursive: Updates the collapsed state of all MenuItems to match "path"
    updateItemCollapse(items: MenuItem[] | undefined): MenuItem[] {
        const selectedGroupKey = this.svcNavigation.selectedGroup()?.fullStorageKey;

        return items?.map((menuItem) => ({
            ...menuItem,
            expanded: selectedGroupKey?.startsWith(menuItem.state?.group.fullStorageKey),
            items: this.updateItemCollapse(menuItem.items)
        })) ?? [];
    }

    // Recursive: Updates the visible state of all MenuItems
    updateItemFromDataChange(items: MenuItem[] | undefined): MenuItem[] | undefined {
        return items?.map((menuItem) => ({
            ...menuItem,
            visible: menuItem.state?.group.visible && !isHiddenGroup(menuItem.state.group, this.svcConfig),
            items: this.updateItemFromDataChange(menuItem.items),
            state: {
                ...menuItem.state,
                isComplete: isComplete(menuItem.state!.group),
                isEmpty: isEmpty(menuItem.state!.group),
            },
        }));
    }
}
