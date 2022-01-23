import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { GroupLinkModule } from '../../../pipe/group-link.pipe';

import { CustomTaskOverlayComponent } from './custom-task-overlay.component';

@NgModule({
    declarations: [
        CustomTaskOverlayComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        DividerModule,
        InputTextModule,
        OverlayPanelModule,

        GroupLinkModule
    ],
    exports: [
        CustomTaskOverlayComponent
    ]
})
export class CustomTaskOverlayModule {
}
