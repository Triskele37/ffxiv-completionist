import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataGroup } from '@model/DataGroup';
import { AsIsOrderPipe } from '@pipe/asIsOrder.pipe';
import { NavigationService } from '@service/navigation/navigation.service';

export type Breadcrumb = {
    label: string;
    navigationIndex?: number;
    group: DataGroup;
    isGroupExpanded?: boolean;
};

@Component({
    selector: 'xiv-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    breadcrumbs: Breadcrumb[] = [];

    selectedCrumb: Breadcrumb;

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

    asIsOrder = AsIsOrderPipe.prototype.transform;

    onSelectedGroupChange(selectedGroup: DataGroup) {
        this.breadcrumbs = [];

        // Construct breadcrumbs bottom to top
        let group = selectedGroup;
        while(group) {
            this.breadcrumbs.push({ label: group.name, group });
            group = group._parent;
        }

        // Flip the list then apply the nav index
        this.breadcrumbs.reverse();
        this.breadcrumbs.forEach((b, i) => b.navigationIndex = i);
    }

    // Callback fired when a section of the breadcrumbs is clicked
    onItemClick(item: Breadcrumb): void {
        this.svcNavigation.popCrumbsUntil(item.navigationIndex);
    }

    //#region------------------------------------------------------- Group Expansion
    onArrowClick(breadcrumb: Breadcrumb): void {
        this.toggleGroupExpanded(breadcrumb);
    }

    onPanelHide() {
        this.collapseAllGroups();
    }

    toggleGroupExpanded(breadcrumb: Breadcrumb) {
        const isGroupExpanded = !breadcrumb.isGroupExpanded;
        this.collapseAllGroups();

        breadcrumb.isGroupExpanded = isGroupExpanded;
        this.selectedCrumb = isGroupExpanded ? breadcrumb : null;
    }

    collapseAllGroups() {
        this.breadcrumbs.forEach((b) => b.isGroupExpanded = false);
    }

    //#endregion
}
