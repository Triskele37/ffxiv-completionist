import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { NavigationService } from '@service/navigation/navigation.service';

type BreadcrumbData = { index: number };
type ClickEvent = {
    item: { data: BreadcrumbData } & MenuItem;
};

/** The breadcrumb bar active in the main view
 * */
@Component({
    selector: 'xiv-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
    items: MenuItem[] = [];
    private sub: Subscription;

    constructor(public svcNavigation: NavigationService) {
    }

    ngOnInit() {
        this.sub = this.svcNavigation.breadcrumbs$
            .subscribe(this.onBreadcrumbsChange.bind(this));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goToHistory(groupLink: string): void {
        const breadcrumbs: string[] = groupLink.split(' > ');
        this.svcNavigation.setBreadcrumbs(breadcrumbs);
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
