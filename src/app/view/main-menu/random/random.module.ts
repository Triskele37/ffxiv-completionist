import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkModule } from '../../../core/pipe/content-link.pipe';
import { RandomComponent } from './random.component';

@NgModule({
    declarations: [
        RandomComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        TooltipModule,

        ContentLinkModule
    ],
    exports: [
        RandomComponent
    ]
})
export class RandomModule {
}
