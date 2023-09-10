import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { ShowAllComponent } from './show-all.component';

@NgModule({
    declarations: [
        ShowAllComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        TooltipModule,
    ],
    exports: [
        ShowAllComponent
    ]
})
export class ShowAllModule {
}
