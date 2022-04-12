import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';

import { PatchNotes100Component } from './1-0-0/patch-notes-1-0-0.component';
import { PatchNotes101Component } from './1-0-1/patch-notes-1-0-1.component';

import { PatchNotesComponent } from './patch-notes.component';

@NgModule({
    declarations: [
        PatchNotes100Component,
        PatchNotes101Component,

        PatchNotesComponent
    ],
    imports: [
        TranslateModule,
        TabViewModule,
    ],
    exports: [
        PatchNotesComponent
    ]
})
export class PatchNotesModule {
}
