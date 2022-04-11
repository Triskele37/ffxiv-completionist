import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkModule } from '@component/content-link/content-link.module';
import { DataCellModule } from '../data/data-cell.module';
import { LinksCellComponent } from './links-cell.component';

@NgModule({
    declarations: [
        LinksCellComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        OverlayPanelModule,
        TooltipModule,

        ContentLinkModule,
        DataCellModule
    ],
    exports: [
        LinksCellComponent
    ]
})
export class LinksCellModule {
}
