import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { ActionsCellComponent } from './actions-cell.component';

@NgModule({
    declarations: [
        ActionsCellComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        TableModule,
        TooltipModule,
    ],
    exports: [
        ActionsCellComponent
    ]
})
export class ActionsCellModule {
}
