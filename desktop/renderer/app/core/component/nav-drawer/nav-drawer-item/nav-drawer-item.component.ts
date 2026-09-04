import { ChangeDetectorRef, Component, effect, inject, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { KeyValuePipe, NgClass } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Tooltip } from 'primeng/tooltip';
import { Observable } from 'rxjs';

import { DataGroup } from '@model/DataGroup';
import { getGroupPath } from '@model/DataGroup/getGroupPath';
import { isParentOf } from '@model/DataGroup/isParentOf';
import { isHiddenGroup } from '@model/DataGroup/isHiddenGroup';
import { isComplete, isEmpty } from '@model/DataGroup/metrics';
import { AsIsOrderPipe } from '@pipe/asIsOrder.pipe';
import { BookmarkService } from '@service/bookmark/bookmark.service';
import { ConfigStoreService } from '@service/store/config-store.service';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { DataService } from '@service/data/data-service';
import { NavigationService } from '@service/navigation/navigation.service';
import { ViewToken } from '@view/view-token';

@Component({
    selector: 'com-nav-drawer-item',
    templateUrl: 'nav-drawer-item.component.html',
    imports: [
        KeyValuePipe,
        NgClass,
        Tooltip
    ],
    styleUrls: ['nav-drawer-item.component.scss']
})
export class NavDrawerItemComponent implements OnChanges {
    svcBookmark = inject(BookmarkService);
    svcConfig = inject(ConfigStoreService);
    svcCustomContent = inject(CustomContentService);
    svcData = inject(DataService);
    svcNavigation = inject(NavigationService);
    cdr = inject(ChangeDetectorRef);

    @Input({ required: true }) group!: DataGroup;
    @Input() isRoot: boolean = false;

    asIsOrder = AsIsOrderPipe.prototype.transform;

    isHidden: boolean = false;
    isExpanded = signal(false);
    isSelected = signal(false);
    isComplete: boolean = false;
    isEmpty: boolean = false;
    activeHelp?: string;

    constructor() {
        effect(() => {
            this.isExpanded.set(this.getIsExpanded());
            this.isSelected.set(this.getIsSelected());
        });

        // Update visible state for "show completed/empty" settings
        this.observableHarness(this.svcData.data.onUpdated$);

        // Update items if any config changes, some affect display
        this.observableHarness(this.svcConfig.navSettingUpdated$);

        // Listen for groups who's content can change
        this.observableHarness(this.svcBookmark.onGroupUpdated$, () => !!this.group.isBookmarkGroup);
        this.observableHarness(this.svcCustomContent.onGroupUpdated$, () => !!this.group.isCustomGroup);
    }

    ngOnChanges(changes: SimpleChanges<NavDrawerItemComponent>) {
        if(changes.group) this.updateGroupProperties();
    }

    observableHarness(observable: Observable<any>, must?: () => boolean): void {
        observable
            .pipe(takeUntilDestroyed())
            .subscribe(() => {
                if(!must) return;
                this.updateGroupProperties();
                this.cdr.markForCheck();
            });
    }

    updateGroupProperties() {
        this.isHidden = !this.group.visible || isHiddenGroup(this.group, this.svcConfig);
        this.isExpanded.set(this.getIsExpanded());
        this.isSelected.set(this.getIsSelected());
        this.isComplete = isComplete(this.group);
        this.isEmpty = !this.group.isBookmarkGroup && isEmpty(this.group);
        this.activeHelp = this.getActiveHelpKey(this.group);
    }

    getIsExpanded(): boolean {
        return isParentOf(this.group, this.svcNavigation.selectedGroup());
    }

    getIsSelected(): boolean {
        return this.group.fullStorageKey === this.svcNavigation.selectedGroup()?.fullStorageKey;
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

    handleClick(): void {
        const selectedGroup = this.svcNavigation.selectedGroup();
        if(!selectedGroup) return;

        const selectedPath = getGroupPath(selectedGroup).join('.');
        const addingPath = getGroupPath(this.group).join('.');
        const isSameGroup = selectedPath === addingPath;

        const newSelectedGroup = isSameGroup ? this.group._parent : this.group;
        if(newSelectedGroup) this.svcNavigation.setSelectedGroup(newSelectedGroup);
    }
}
