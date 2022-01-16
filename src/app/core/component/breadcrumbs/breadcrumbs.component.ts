import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { NavigationService } from '@service/navigation/navigation.service';

type BreadcrumbData = { index: number };
type ClickEvent = {
    item: { data: BreadcrumbData } & MenuItem;
};

@Component({
    selector: 'xiv-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
    items: MenuItem[] = [];

    constructor(private svcNavigation: NavigationService) {
    }

    ngOnInit() {
        this.svcNavigation.breadcrumbs$.subscribe(this.onBreadcrumbsChange.bind(this));
    }

    // Handler for when breadcrumbs$ changes
    private onBreadcrumbsChange(breadcrumbs: string[]): void {
        this.items = breadcrumbs.map((breadcrumb, index) => ({
            label: breadcrumb,
            data: { index }
        }));
    }

    // Callback fired when a section of the breadcrumbs is clicked
    onItemClick($event: ClickEvent): void {
        this.svcNavigation.popCrumbsUntil($event.item.data.index);
    }
}
