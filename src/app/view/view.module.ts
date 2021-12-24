import { NgModule } from '@angular/core';

import { InstructionsModule } from './instructions';
import { DevNotesModule } from './dev-notes';
import { SearchModule } from './search/search.module';
import { SettingsModule } from './settings/settings.module';

/** This module needs to import any dynamically injected components
 * that exist in the MainMenu so that they are included in the build
 * */
@NgModule({
    imports: [
        InstructionsModule,
        DevNotesModule,
        SearchModule,
        SettingsModule,
    ],
    exports: [
        InstructionsModule,
        DevNotesModule,
        SearchModule,
        SettingsModule,
    ]
})
export class ViewModule {
}
