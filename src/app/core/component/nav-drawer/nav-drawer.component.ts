import { Component } from '@angular/core';

import { data } from '../../../data';
import { MainMenu } from '../../../view/main-menu';

@Component({
    selector: 'xiv-nav-drawer',
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent {
    allData = data;
    mainMenu = MainMenu;
}
