import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SlideMenuModule } from 'primeng/slidemenu';

import { NavDrawerComponent } from './nav-drawer.component';

@NgModule({
    declarations: [
        NavDrawerComponent
    ],
    imports: [
        CommonModule,
        PanelMenuModule,
        SlideMenuModule
    ],
    exports: [
        NavDrawerComponent
    ]
})
export class NavDrawerModule {
}
