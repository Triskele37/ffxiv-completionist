import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

import { TableActionOverlayComponent } from './table-action-overlay.component';

@NgModule({
    declarations: [
        TableActionOverlayComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
    ],
    exports: [
        TableActionOverlayComponent
    ]
})
export class TableActionOverlayModule {
}
