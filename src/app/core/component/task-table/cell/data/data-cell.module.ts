import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkModule } from '@component/content-link/content-link.module';
import { DataCellComponent } from './data-cell.component';

@NgModule({
    declarations: [
        DataCellComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        OverlayPanelModule,
        TooltipModule,

        ContentLinkModule,
    ],
    exports: [
        DataCellComponent
    ]
})
export class DataCellModule {
}
