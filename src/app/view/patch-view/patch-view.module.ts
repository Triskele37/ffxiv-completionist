import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';

import { ContentLinkModule } from '@component/content-link/content-link.module';
import { GroupSelectorModule } from '@component/group-selector/group-selector.module';

import { PatchViewComponent } from './patch-view.component';
import { TableModule } from 'primeng/table';
import { CompleteCellModule } from '@component/task-table/cell/complete/complete-cell.module';
import { NumericCompleteCellModule } from '@component/task-table/cell/numeric-complete/numeric-complete-cell.module';
import { ButtonGroupModule } from 'primeng/buttongroup';

@NgModule({
    declarations: [
        PatchViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ButtonModule,
        DropdownModule,
        InputNumberModule,
        TooltipModule,

        ContentLinkModule,
        GroupSelectorModule,
        TableModule,
        CompleteCellModule,
        NumericCompleteCellModule,
        ButtonGroupModule,
    ],
    exports: [
        PatchViewComponent
    ]
})
export class PatchViewModule {
}
