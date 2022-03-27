import { NgModule } from '@angular/core';

import { ContentLinkModule } from '@component/content-link/content-link.module';

import { CompleteCellModule } from './complete/complete-cell.module';
import { DataCellModule } from './data/data-cell.module';
import { EditCellModule } from './edit/edit-cell.module';
import { ActionsCellModule } from './actions/actions-cell.module';
import { NumericCompleteCellModule } from './numeric-complete/numeric-complete-cell.module';
import { LinksCellModule } from './links/links-cell.module';

@NgModule({
    imports: [
        ContentLinkModule,

        CompleteCellModule,
        DataCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
        LinksCellModule,
    ],
    exports: [
        ContentLinkModule,

        CompleteCellModule,
        DataCellModule,
        EditCellModule,
        ActionsCellModule,
        NumericCompleteCellModule,
        LinksCellModule,
    ]
})
export class CellModule {
}
