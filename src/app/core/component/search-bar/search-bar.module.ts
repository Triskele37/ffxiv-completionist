import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        SearchBarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        TooltipModule,
    ],
    exports: [
        SearchBarComponent
    ]
})
export class SearchBarModule {
}
