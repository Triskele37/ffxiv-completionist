import { Component } from '@angular/core';

import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
    selector: 'xiv-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
    breadcrumbs = [];

    constructor(private svcNavigation: NavigationService) {
        this.svcNavigation.breadcrumbs$.subscribe((breadcrumbs) => {
            this.breadcrumbs = breadcrumbs;
        });
    }

    onClickCrumb(index) {
        this.svcNavigation.popCrumbsUntil(index);
    }
}
