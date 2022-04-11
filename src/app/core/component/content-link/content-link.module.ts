import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkPipeModule } from '@pipe/content-link.pipe';
import { ContentLinkComponent } from './content-link.component';

@NgModule({
    declarations: [
        ContentLinkComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        TooltipModule,

        ContentLinkPipeModule,
    ],
    exports: [
        ContentLinkComponent
    ]
})
export class ContentLinkModule {
}
