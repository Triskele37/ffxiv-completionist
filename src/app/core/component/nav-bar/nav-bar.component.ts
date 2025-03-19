import { Component, HostListener } from '@angular/core';

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

    @HostListener('window:keydown', ['$event'])
    onWindowKeydown($event: KeyboardEvent): void {
        if(this.svcNavigation.selectedGroup$.value.isCustomGroup) return;

        if($event.code === 'Escape') this.goToParent();
        if($event.code === 'Backspace') this.goBack();
    }

    goBack(): void {
        if(!this.svcNavigation.groupHistory$.value.length) return;
        this.svcNavigation.goToHistory(this.svcNavigation.groupHistory$.value[0]);
    }

    goToParent(): void {
        this.svcNavigation.popCrumbsOnce();
    }
}
