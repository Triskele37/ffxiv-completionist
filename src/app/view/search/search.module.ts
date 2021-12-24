import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StatusIndicatorModule } from '@component/status-indicator/status-indicator.module';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,

        StatusIndicatorModule,
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule {
}
