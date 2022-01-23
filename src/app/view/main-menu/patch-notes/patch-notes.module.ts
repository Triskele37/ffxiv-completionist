import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

import { PatchNotes100Component } from './1-0-0/patch-notes-1-0-0.component';

import { DevNotesComponent } from './dev-notes/dev-notes.component';
import { PatchNotesComponent } from './patch-notes.component';

@NgModule({
    declarations: [
        PatchNotes100Component,

        DevNotesComponent,
        PatchNotesComponent
    ],
    imports: [
        TabViewModule,
    ],
    exports: [
        PatchNotesComponent
    ]
})
export class PatchNotesModule {
}
