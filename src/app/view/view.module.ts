import { NgModule } from '@angular/core';

import { InstructionsModule } from './main-menu/instructions/instructions.module';
import { PatchNotesModule } from './main-menu/patch-notes/patch-notes.module';
import { SettingsModule } from './main-menu/settings/settings.module';
import { SearchModule } from './search/search.module';

/** This module needs to import any dynamically injected components
 * that exist in the MainMenu so that they are included in the build
 * */
@NgModule({
    imports: [
        InstructionsModule,
        PatchNotesModule,
        SettingsModule,
        SearchModule,
    ],
    exports: [
        InstructionsModule,
        PatchNotesModule,
        SettingsModule,
        SearchModule,
    ]
})
export class ViewModule {
}
