import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkModule } from '@component/content-link/content-link.module';
import { GroupSelectorModule } from '@component/group-selector/group-selector.module';

import { RandomComponent } from './random.component';

@NgModule({
    declarations: [
        RandomComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ButtonModule,
        InputNumberModule,
        TooltipModule,

        ContentLinkModule,
        GroupSelectorModule,
    ],
    exports: [
        RandomComponent
    ]
})
export class RandomModule {
}
