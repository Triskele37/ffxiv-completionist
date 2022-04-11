import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

import { SelectionOverlayComponent } from './selection-overlay.component';

@NgModule({
    declarations: [
        SelectionOverlayComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        DividerModule,
    ],
    exports: [
        SelectionOverlayComponent
    ]
})
export class SelectionOverlayModule {
}
