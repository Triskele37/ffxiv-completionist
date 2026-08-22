import { Component, effect, OnInit, signal } from '@angular/core';
import { KeyValuePipe, NgClass } from '@angular/common';
import { Popover } from 'primeng/popover';

import { ContentLinkComponent } from '@component/content-link/content-link.component';
import { DataGroup } from '@model/DataGroup';
import { AsIsOrderPipe } from '@pipe/asIsOrder.pipe';
import { CustomContentService } from '@service/custom-content/custom-content.service';
import { NavigationService } from '@service/navigation/navigation.service';

export type Breadcrumb = {
    label: string;
    navigationIndex?: number;
    group: DataGroup;
    isGroupExpanded?: boolean;
};

@Component({
    selector: 'com-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    imports: [
        ContentLinkComponent,
        KeyValuePipe,
        NgClass,
        Popover,
    ]
})
export class BreadcrumbsComponent implements OnInit {
    selectedCrumb = signal<Breadcrumb | null>(null);
    breadcrumbs = signal<Breadcrumb[]>([]);

    constructor(
        private svcCustomContent: CustomContentService,
        public svcNavigation: NavigationService
    ) {
        effect(() => this.setComputedBreadcrumbs());
    }

    ngOnInit() {
        this.svcCustomContent.onGroupUpdated$.subscribe(() => this.setComputedBreadcrumbs());
    }

    // Provide the transform method of the pipe for the keyvalue pipe's input
    asIsOrderTransform = AsIsOrderPipe.prototype.transform;

    // Callback fired when a section of the breadcrumbs is clicked
    onItemClick(item: Breadcrumb): void {
        if(item.navigationIndex !== undefined) {
            this.svcNavigation.popCrumbsUntil(item.navigationIndex);
        }
    }

    setComputedBreadcrumbs() {
        let group = this.svcNavigation.selectedGroup();
        const breadcrumbs: Breadcrumb[] = [];

        // Construct breadcrumbs bottom to top
        while(group) {
            breadcrumbs.push({ label: group.name, group });
            group = group._parent;
        }

        // Flip the list then apply the nav index
        breadcrumbs.reverse();
        breadcrumbs.forEach((b, i) => b.navigationIndex = i);

        this.breadcrumbs.set(breadcrumbs);
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
        this.selectedCrumb.set(isGroupExpanded ? breadcrumb : null);
    }

    collapseAllGroups() {
        this.breadcrumbs().forEach((b) => b.isGroupExpanded = false);
    }

    //#endregion
}
