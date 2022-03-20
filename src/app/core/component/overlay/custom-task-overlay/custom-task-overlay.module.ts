import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { ContentLinkModule } from '../../../pipe/content-link.pipe';

import { CustomTaskOverlayComponent } from './custom-task-overlay.component';

@NgModule({
    declarations: [
        CustomTaskOverlayComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,

        ButtonModule,
        DividerModule,
        InputTextModule,
        OverlayPanelModule,

        ContentLinkModule
    ],
    exports: [
        CustomTaskOverlayComponent
    ]
})
export class CustomTaskOverlayModule {
}
