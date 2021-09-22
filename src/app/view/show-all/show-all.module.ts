import { NgModule } from '@angular/core';

import { TaskTableModule } from '../../core/components/task-table/task-table.module';

import { ShowAllComponent } from './show-all.component';

@NgModule({
    declarations: [
        ShowAllComponent
    ],
    imports: [
        TaskTableModule
    ],
    exports: [
        ShowAllComponent
    ]
})
export class ShowAllModule {
}
