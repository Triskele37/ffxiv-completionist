import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { DataGroup } from '@domain/DataGroup';
import { NavigationService } from '@service/navigation/navigation.service';

type BreadcrumbData = { index: number };
type ClickEvent = {
    item: { data: BreadcrumbData } & MenuItem;
};

/** The navigation bar active in the main view
 * */
@Component({
    selector: 'xiv-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
    items: MenuItem[] = [];
    sub: Subscription;

    isShowAllVisible: boolean;

    constructor(public svcNavigation: NavigationService) {
    }

    ngOnInit(): void {
        this.sub = this.svcNavigation.selectedGroup$.subscribe(
            this.onSelectedGroupChange.bind(this)
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    goToHistory(group: DataGroup): void {
        this.svcNavigation.setBreadcrumbs(group.fullStorageKey.split('.'));
    }

    // Handler for when breadcrumbs$ changes
    onSelectedGroupChange(selectedGroup: DataGroup): void {
        this.items = selectedGroup.groupPath.map((breadcrumb, index) => ({
            label: breadcrumb,
            data: { index }
        }));

        const { isUiGroup, isCustomGroup, isBookmarkGroup } = selectedGroup;
        if(isUiGroup || isCustomGroup || isBookmarkGroup) {
            this.isShowAllVisible = false;
        }
        else {
            this.isShowAllVisible = !!(selectedGroup.subGroups && selectedGroup.columns);
        }

        this.emitShowAllChange(false);
    }

    // Callback fired when a section of the breadcrumbs is clicked
    onItemClick($event: ClickEvent): void {
        this.svcNavigation.popCrumbsUntil($event.item.data.index);
    }

    emitShowAllChange(value: boolean): void {
        this.svcNavigation.allTaskViewEnabled = value;
    }

}
