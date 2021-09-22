import { Component, NgModule } from '@angular/core';

//------------------------------------------------------- Components
@Component({
    selector: 'xiv-dev-notes',
    templateUrl: './dev-notes.html'
})
export class DevNotesComponent {}

//------------------------------------------------------- Module
@NgModule({
    declarations: [
        DevNotesComponent
    ],
    exports: [
        DevNotesComponent
    ]
})
export class DevNotesModule {}

//------------------------------------------------------- UI Group
export const DevNotes = {
    name: 'Dev Notes',
    component: DevNotesComponent
};
