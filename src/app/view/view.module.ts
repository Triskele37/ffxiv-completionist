import { NgModule } from '@angular/core';

import { GuideModule } from './guide/guide.module';
import { PatchNotesModule } from './patch-notes/patch-notes.module';
import { RandomModule } from './random/random.module';
import { ChainAnalysisModule } from './chain-analysis/chain-analysis.module';
import { SettingsModule } from './settings/settings.module';
import { SearchModule } from './search/search.module';

/** This module needs to import any dynamically injected components
 * that exist in the view so that they are included in the build
 * */
@NgModule({
    imports: [
        GuideModule,
        PatchNotesModule,
        RandomModule,
        ChainAnalysisModule,
        SettingsModule,
        SearchModule,
    ],
    exports: [
        GuideModule,
        PatchNotesModule,
        RandomModule,
        ChainAnalysisModule,
        SettingsModule,
        SearchModule,
    ]
})
export class ViewModule {
}
