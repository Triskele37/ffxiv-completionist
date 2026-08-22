import { Type } from '@angular/core';

import { PatchNotesComponent } from './patch-notes/patch-notes.component';
import { PatchViewComponent } from './patch-view/patch-view.component';
import { ChainAnalysisComponent } from './chain-analysis/chain-analysis.component';
import { RandomComponent } from './random/random.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { ViewToken } from './view-token';

export function getComponentFromToken(token: ViewToken | undefined): Type<any> | undefined {
    switch(token) {
        case ViewToken.PatchNotes: return PatchNotesComponent;
        case ViewToken.PatchView: return PatchViewComponent;
        case ViewToken.ChainAnalysis: return ChainAnalysisComponent;
        case ViewToken.Random: return RandomComponent;
        case ViewToken.Settings: return SettingsComponent;
        case ViewToken.Search: return SearchComponent;
    }
}
