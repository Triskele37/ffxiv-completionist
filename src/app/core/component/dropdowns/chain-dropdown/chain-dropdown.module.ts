import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChainDropdownComponent } from './chain-dropdown.component';

@NgModule({
    declarations: [
        ChainDropdownComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ChainDropdownComponent
    ]
})
export class ChainDropdownModule {
}
