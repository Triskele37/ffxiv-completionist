import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkModule } from '@component/content-link/content-link.module';
import { ChainOverlayComponent } from './chain-overlay.component';

@NgModule({
    declarations: [
        ChainOverlayComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        BadgeModule,
        ButtonModule,
        TooltipModule,

        ContentLinkModule
    ],
    exports: [
        ChainOverlayComponent
    ]
})
export class ChainOverlayModule {
}
