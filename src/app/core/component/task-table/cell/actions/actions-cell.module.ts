import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';

import { ActionsCellComponent } from './actions-cell.component';

@NgModule({
    declarations: [
        ActionsCellComponent
    ],
    imports: [
        CommonModule,
        SpeedDialModule,
        TooltipModule
    ],
    exports: [
        ActionsCellComponent
    ]
})
export class ActionsCellModule {
}
