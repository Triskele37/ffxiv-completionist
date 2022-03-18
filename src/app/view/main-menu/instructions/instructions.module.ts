import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';

import { NavigationInstructionsComponent } from './navigation/navigation-instructions.component';
import { TaskTableInstructionsComponent } from './task-table/task-table-instructions.component';
import { CompletionInstructionsComponent } from './completion/completion-instructions.component';
import { SpecialGroupsInstructionsComponent } from './special-groups/special-groups-instructions.component';
import { ChainingInstructionsComponent } from './chaining/chaining-instructions.component';
import { SavingInstructionsComponent } from './saving/saving-instructions.component';
import { OtherInstructionsComponent } from './other/other-instructions.component';

import { InstructionsComponent } from './instructions.component';

@NgModule({
    declarations: [
        NavigationInstructionsComponent,
        TaskTableInstructionsComponent,
        CompletionInstructionsComponent,
        SpecialGroupsInstructionsComponent,
        ChainingInstructionsComponent,
        SavingInstructionsComponent,
        OtherInstructionsComponent,

        InstructionsComponent
    ],
    imports: [
        TranslateModule,
        TabViewModule
    ],
    exports: [
        InstructionsComponent
    ]
})
export class InstructionsModule {
}
