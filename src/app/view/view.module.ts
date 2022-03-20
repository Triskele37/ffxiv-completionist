import { NgModule } from '@angular/core';

import { GuideModule } from './main-menu/guide/guide.module';
import { PatchNotesModule } from './main-menu/patch-notes/patch-notes.module';
import { SettingsModule } from './main-menu/settings/settings.module';
import { SearchModule } from './search/search.module';

/** This module needs to import any dynamically injected components
 * that exist in the MainMenu so that they are included in the build
 * */
@NgModule({
    imports: [
        GuideModule,
        PatchNotesModule,
        SettingsModule,
        SearchModule,
    ],
    exports: [
        GuideModule,
        PatchNotesModule,
        SettingsModule,
        SearchModule,
    ]
})
export class ViewModule {
}
