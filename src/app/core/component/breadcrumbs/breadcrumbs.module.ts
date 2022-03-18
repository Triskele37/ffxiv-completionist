import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { GroupLinkModule } from '../../pipe/group-link.pipe';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent
    ],
    imports: [
        CommonModule,
        BreadcrumbModule,
        ButtonModule,
        OverlayPanelModule,
        GroupLinkModule,
    ],
    exports: [
        BreadcrumbsComponent
    ]
})
export class BreadcrumbsModule {
}
