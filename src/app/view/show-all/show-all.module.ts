import { NgModule } from '@angular/core';

import { TaskTableModule } from '@component/task-table/task-table.module';
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
