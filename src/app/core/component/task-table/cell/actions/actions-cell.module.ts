import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { GarlandActionComponent } from './garland/garland-action.component';
import { GamerEscapeActionComponent } from './gamer-escape/gamer-escape-action.component';
import { DragActionComponent } from './drag/drag-action.component';
import { BookmarkActionComponent } from './bookmark/bookmark-action.component';

import { ActionsCellComponent } from './actions-cell.component';

@NgModule({
    declarations: [
        ActionsCellComponent,

        GarlandActionComponent,
        GamerEscapeActionComponent,
        DragActionComponent,
        BookmarkActionComponent,
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
