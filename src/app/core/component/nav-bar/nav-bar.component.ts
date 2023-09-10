import { Component } from '@angular/core';

import { NavigationService } from '@service/navigation/navigation.service';

/** The navigation bar active in the main view
 * */
@Component({
    selector: 'xiv-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    constructor(public svcNavigation: NavigationService) {
    }

    goToParent(): void {
        this.svcNavigation.popCrumbsOnce();
    }
}
