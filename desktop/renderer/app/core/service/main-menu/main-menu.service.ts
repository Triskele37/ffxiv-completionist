import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import type { DataGroup } from '@model/DataGroup';
import { ConfigStoreService } from '@service/store/config-store.service';
import { DataService } from '@service/data/data-service';

//#region ------------------------------------------------------- Methods
import { initGroup } from './methods/initGroup';
import { getPatchNotes } from './methods/getPatchNotes';
import { getPatchView } from './methods/getPatchView';
import { getRandom } from './methods/getRandom';
import { getTypingMinigame } from './methods/getTypingMinigame';
import { getChainAnalysis } from './methods/getChainAnalysis';
import { getSettings } from './methods/getSettings';
import { getSearch } from './methods/getSearch';
import { getDevTools, syncDevTools } from './methods/getDevTools';

//#endregion

/**
 * Has to be a service so TranslateService can load the group names properly
 * */
@Injectable({
    providedIn: 'root'
})
export class MainMenuService {
    translate = inject(TranslateService);
    svcConfigStore = inject(ConfigStoreService);
    svcData = inject(DataService);

    group: DataGroup;

    constructor() {
        this.group = initGroup(this)();
        syncDevTools(this)();
    }

    get getPatchNotes() { return getPatchNotes(this); }
    get getPatchView() { return getPatchView(this); }
    get getRandom() { return getRandom(this); }
    get getTypingMinigame() { return getTypingMinigame(this); }
    get getChainAnalysis() { return getChainAnalysis(this); }
    get getSettings() { return getSettings(this); }
    get getSearch() { return getSearch(this); }
    get getDevTools() { return getDevTools(this); }
}
