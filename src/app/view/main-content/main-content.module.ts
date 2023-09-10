import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

import { SummaryLineModule } from '@component/summary-line/summary-line.module';
import { TaskTableModule } from '@component/task-table/task-table.module';
import { AnchorDirectiveModule } from '@directive/anchor.directive';
import { GroupDisplayPipeModule } from '@pipe/should-show-group.pipe';

import { LandingPageModule } from '../landing-page';
import { ShowAllModule } from '../show-all/show-all.module';

import { MainContentComponent } from './main-content.component';

@NgModule({
    declarations: [
        MainContentComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        DividerModule,

        SummaryLineModule,
        TaskTableModule,
        AnchorDirectiveModule,
        GroupDisplayPipeModule,

        LandingPageModule,
        ShowAllModule,
    ],
    exports: [
        MainContentComponent
    ]
})
export class MainContentModule {
}
