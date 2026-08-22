import { Component, HostListener } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';

import { NavigationService } from '@service/navigation/navigation.service';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HistoryOverlayComponent } from './history-overlay/history-overlay.component';
import { ShowAllToggleComponent } from './show-all-toggle/show-all-toggle.component';

/**
 * The navigation bar active in the main view
 * */
@Component({
    selector: 'com-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    imports: [
        BreadcrumbsComponent,
        ButtonGroup,
        ButtonDirective,
        HistoryOverlayComponent,
        ShowAllToggleComponent,
    ]
})
export class NavBarComponent {
    constructor(public svcNavigation: NavigationService) {
    }

    @HostListener('window:keydown', ['$event'])
    onWindowKeydown($event: KeyboardEvent): void {
        const selectedGroup = this.svcNavigation.selectedGroup();
        if(selectedGroup?.isCustomGroup && selectedGroup._key === 'custom') return;
        if(($event.target as HTMLElement).tagName === 'INPUT') return;

        if($event.code === 'Escape') this.goToParent();
        if($event.code === 'Backspace') this.goBack();
    }

    goBack(): void {
        if(!this.svcNavigation.groupHistory().length) return;
        this.svcNavigation.goToHistory(this.svcNavigation.groupHistory()[0]);
    }

    goToParent(): void {
        this.svcNavigation.popCrumbsOnce();
    }
}
