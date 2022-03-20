import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';

import { NavigationGuideComponent } from './navigation/navigation-guide.component';
import { TaskTableGuideComponent } from './task-table/task-table-guide.component';
import { CompletionGuideComponent } from './completion/completion-guide.component';
import { SpecialGroupsGuideComponent } from './special-groups/special-groups-guide.component';
import { ChainingGuideComponent } from './chaining/chaining-guide.component';
import { SavingGuideComponent } from './saving/saving-guide.component';
import { OtherGuideComponent } from './other/other-guide.component';

import { GuideComponent } from './guide.component';

@NgModule({
    declarations: [
        NavigationGuideComponent,
        TaskTableGuideComponent,
        CompletionGuideComponent,
        SpecialGroupsGuideComponent,
        ChainingGuideComponent,
        SavingGuideComponent,
        OtherGuideComponent,

        GuideComponent
    ],
    imports: [
        TranslateModule,
        TabViewModule
    ],
    exports: [
        GuideComponent
    ]
})
export class GuideModule {
}
