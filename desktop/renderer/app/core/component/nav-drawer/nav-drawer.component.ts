import { Component, inject } from '@angular/core';

import { DataService } from '@service/data/data-service';
import { MainMenuService } from '@service/main-menu/main-menu.service';

import { NavDrawerItemComponent } from './nav-drawer-item/nav-drawer-item.component';

@Component({
    selector: 'com-nav-drawer',
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss'],
    imports: [
        NavDrawerItemComponent
    ]
})
export class NavDrawerComponent {
    svcData = inject(DataService);
    svcMainMenu = inject(MainMenuService);
}
