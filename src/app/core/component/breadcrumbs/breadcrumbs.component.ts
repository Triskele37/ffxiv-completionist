import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { DataGroup } from '@domain/DataGroup';
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

    constructor(
        public svcNavigation: NavigationService
    ) {
    }

    ngOnInit() {
        this.sub = this.svcNavigation.selectedGroup$.subscribe(
            this.onSelectedGroupChange.bind(this)
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goToHistory(group: DataGroup): void {
        this.svcNavigation.setBreadcrumbs(group.fullStorageKey.split('.'));
    }

    // Handler for when breadcrumbs$ changes
    private onSelectedGroupChange(selectedGroup: DataGroup): void {
        this.items = selectedGroup.groupPath.map((breadcrumb, index) => ({
            label: breadcrumb,
            data: { index }
        }));
    }

    // Callback fired when a section of the breadcrumbs is clicked
    onItemClick($event: ClickEvent): void {
        this.svcNavigation.popCrumbsUntil($event.item.data.index);
    }
}
