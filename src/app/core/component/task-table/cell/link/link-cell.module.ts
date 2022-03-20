import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { GroupLinkModule } from '../../../../pipe/group-link.pipe';
import { LinkCellComponent } from './link-cell.component';

@NgModule({
    declarations: [
        LinkCellComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        TooltipModule,

        GroupLinkModule,
    ],
    exports: [
        LinkCellComponent
    ]
})
export class LinkCellModule {
}
