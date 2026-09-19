import { Component, effect, inject, OnInit, signal, ViewChild } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { Popover } from 'primeng/popover';

import { ContentLinkComponent } from '@component/content-link/content-link.component';
import type { DataGroup } from '@model/DataGroup';
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
        KeyValuePipe,
        NgIcon,
        Popover,
        ContentLinkComponent,
    ]
})
export class BreadcrumbsComponent implements OnInit {
    private svcCustomContent = inject(CustomContentService);
    svcNavigation = inject(NavigationService);

    selectedCrumb = signal<Breadcrumb | null>(null);
    breadcrumbs = signal<Breadcrumb[]>([]);

    constructor() {
        effect(() => this.setComputedBreadcrumbs());
    }

    ngOnInit() {
        this.svcCustomContent.onGroupUpdated$.subscribe(() => this.setComputedBreadcrumbs());
    }

    // Provide the transform method of the pipe for the keyvalue pipe's input
    asIsOrderTransform = AsIsOrderPipe.prototype.transform;

    @ViewChild('op') op: Popover | undefined;

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
    onArrowClick($event: PointerEvent, breadcrumb: Breadcrumb): void {
        $event.stopPropagation();
        this.toggleGroupExpanded(breadcrumb);
        this.op?.toggle($event);
    }

    onPanelHide() {
        this.breadcrumbs.update((breadcrumbs) => {
            breadcrumbs.forEach((b) => b.isGroupExpanded = false);
            return [...breadcrumbs];
        });
    }

    toggleGroupExpanded(breadcrumb: Breadcrumb) {
        this.breadcrumbs.update((breadcrumbs) => {
            breadcrumbs.forEach((b, i) => {
                if(i === breadcrumb.navigationIndex) {
                    b.isGroupExpanded = !b.isGroupExpanded;
                }
                else {
                    b.isGroupExpanded = false;
                }
            });
            return [...breadcrumbs];
        });

        this.selectedCrumb.set(breadcrumb.isGroupExpanded ? breadcrumb : null);
    }

    //#endregion
}
