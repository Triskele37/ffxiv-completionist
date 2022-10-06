import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';

import { GroupSelectorComponent } from './group-selector.component';

@NgModule({
    declarations: [
        GroupSelectorComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        SlideMenuModule
    ],
    exports: [
        GroupSelectorComponent
    ]
})
export class GroupSelectorModule {
}
