import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from 'primeng/tabview';

import { PatchNotes100Component } from './1-0-0/patch-notes-1-0-0.component';
import { PatchNotes101Component } from './1-0-1/patch-notes-1-0-1.component';
import { PatchNotes102Component } from './1-0-2/patch-notes-1-0-2.component';
import { PatchNotes103Component } from './1-0-3/patch-notes-1-0-3.component';
import { PatchNotes104Component } from './1-0-4/patch-notes-1-0-4.component';
import { PatchNotes105Component } from './1-0-5/patch-notes-1-0-5.component';

import { PatchNotesComponent } from './patch-notes.component';

@NgModule({
    declarations: [
        PatchNotes100Component,
        PatchNotes101Component,
        PatchNotes102Component,
        PatchNotes103Component,
        PatchNotes104Component,
        PatchNotes105Component,

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
