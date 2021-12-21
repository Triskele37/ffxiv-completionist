import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@component/icon/icon.module';
import { ChainDropdownComponent } from './chain-dropdown.component';

@NgModule({
    declarations: [
        ChainDropdownComponent
    ],
    imports: [
        CommonModule,

        IconModule
    ],
    exports: [
        ChainDropdownComponent
    ]
})
export class ChainDropdownModule {
}
