import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatBarComponent } from './stat-bar.component';

@NgModule({
    declarations: [
        StatBarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        StatBarComponent
    ]
})
export class StatBarModule {
}
