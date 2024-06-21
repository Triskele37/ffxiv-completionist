import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';

import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { HistoryOverlayModule } from './history-overlay/history-overlay.module';
import { ShowAllModule } from './show-all/show-all.module';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        ButtonGroupModule,

        BreadcrumbsModule,
        HistoryOverlayModule,
        ShowAllModule,
    ],
    exports: [
        NavBarComponent
    ]
})
export class NavBarModule {
}
