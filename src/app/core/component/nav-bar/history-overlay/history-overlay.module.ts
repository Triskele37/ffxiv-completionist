import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkPipeModule } from '@pipe/content-link.pipe';

import { HistoryOverlayComponent } from './history-overlay.component';

@NgModule({
    declarations: [
        HistoryOverlayComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        OverlayPanelModule,
        TooltipModule,

        ContentLinkPipeModule,
    ],
    exports: [
        HistoryOverlayComponent
    ]
})
export class HistoryOverlayModule {
}
