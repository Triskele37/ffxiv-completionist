import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentComponent } from './main-content.component';

import { SummaryLineModule } from '@component/summary-line/summary-line.module';
import { TaskTableModule } from '@component/task-table/task-table.module';
import { LandingPageModule } from '../landing-page';
import { ShowAllModule } from '../show-all/show-all.module';

@NgModule({
    declarations: [
        MainContentComponent
    ],
    imports: [
        CommonModule,

        SummaryLineModule,
        LandingPageModule,
        ShowAllModule,
        TaskTableModule
    ],
    exports: [
        MainContentComponent
    ]
})
export class MainContentModule {
}
