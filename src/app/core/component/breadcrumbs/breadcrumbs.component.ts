import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { NavigationService } from '@service/navigation/navigation.service';

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

    onBreadcrumbsChange(breadcrumbs: string[]) {
        this.items = breadcrumbs.map((breadcrumb, index) => ({
            label: breadcrumb,
            data: { index }
        }));
    }

    onItemClick($event) {
        if($event.item.label !== this.items[0].label) {
            this.svcNavigation.popCrumbsUntil($event.item.data.index);
        }
    }
}
