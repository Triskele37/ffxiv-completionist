import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { ContentLinkModule } from '@component/content-link/content-link.module';
import { ContentLinkPipeModule } from '@pipe/content-link.pipe';

import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,

        ButtonModule,
        OverlayPanelModule,

        ContentLinkModule,
        ContentLinkPipeModule,
    ],
    exports: [
        BreadcrumbsComponent
    ]
})
export class BreadcrumbsModule {
}
