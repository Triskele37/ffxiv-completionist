import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

import { QuickMarkOverlayComponent } from './quick-mark-overlay.component';

@NgModule({
    declarations: [
        QuickMarkOverlayComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule
    ],
    exports: [
        QuickMarkOverlayComponent
    ]
})
export class QuickMarkOverlayModule {
}
