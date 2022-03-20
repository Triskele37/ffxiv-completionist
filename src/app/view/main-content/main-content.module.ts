import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

import { SummaryLineModule } from '@component/summary-line/summary-line.module';
import { TaskTableModule } from '@component/task-table/task-table.module';

import { AnchorDirective } from './anchor.directive';
import { LandingPageModule } from '../main-menu/landing-page';
import { ShowAllModule } from '../show-all/show-all.module';

import { MainContentComponent } from './main-content.component';

@NgModule({
    declarations: [
        MainContentComponent,
        AnchorDirective
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,

        SummaryLineModule,
        LandingPageModule,
        ShowAllModule,
        TaskTableModule,
    ],
    exports: [
        MainContentComponent
    ]
})
export class MainContentModule {
}
