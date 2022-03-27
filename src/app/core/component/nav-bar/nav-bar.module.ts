import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { ContentLinkPipeModule } from '@pipe/content-link.pipe';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,

        BreadcrumbModule,
        ButtonModule,
        OverlayPanelModule,

        ContentLinkPipeModule,
    ],
    exports: [
        NavBarComponent
    ]
})
export class NavBarModule {
}
