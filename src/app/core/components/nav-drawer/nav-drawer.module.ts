import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavDrawerComponent } from './nav-drawer.component';
import { NavGroupComponent } from './nav-group/nav-group.component';

@NgModule({
    declarations: [
        NavDrawerComponent,
        NavGroupComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavDrawerComponent
    ]
})
export class NavDrawerModule {
}
