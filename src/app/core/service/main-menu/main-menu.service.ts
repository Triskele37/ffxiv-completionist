import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataGroup } from '@model/DataGroup';
import { DataService } from '@service/data/data-service';
import { ViewToken } from '@view/view-token';

/**
 * Has to be a service so TranslateService can load the group names properly
 * */
@Injectable({
    providedIn: 'root'
})
export class MainMenuService {
    data: DataGroup;

    constructor(
        private translate: TranslateService,
        private svcData: DataService,
    ) {
        this.data = this.svcData.group.createDataGroup({
            key: 'main-menu',
            groupName: this.translate.instant('APP.NAME'),
            noContent: true,
            isUiGroup: true
        }, null);

        this.data.subGroups = new Map();
        this.addPatchNotes();
        this.addPatchView();
        this.addRandom();
        this.addChainAnalysis();
        this.addSettings();
        this.addSearch();
    }

    addPatchNotes(): void {
        const patchNotes = this.svcData.group.createDataGroup({
            key: 'patch-notes',
            groupName: this.translate.instant('APP.UPDATES.TITLE'),
            component: ViewToken.PatchNotes
        }, this.data);

        this.data.subGroups?.set(patchNotes._key, patchNotes);
    }

    addPatchView(): void {
        const patchView = this.svcData.group.createDataGroup({
            key: 'patch-view',
            groupName: this.translate.instant('APP.PATCH_VIEW.TITLE'),
            component: ViewToken.PatchView
        }, this.data);

        this.data.subGroups?.set(patchView._key, patchView);
    }

    addRandom(): void {
        const random = this.svcData.group.createDataGroup({
            key: 'random',
            groupName: this.translate.instant('APP.RANDOM_VIEW.TITLE'),
            component: ViewToken.Random
        }, this.data);

        this.data.subGroups?.set(random._key, random);
    }

    addChainAnalysis(): void {
        const random = this.svcData.group.createDataGroup({
            key: 'chain-analysis',
            groupName: this.translate.instant('APP.CHAIN_ANALYSIS.TITLE'),
            component: ViewToken.ChainAnalysis
        }, this.data);

        this.data.subGroups?.set(random._key, random);
    }

    addSettings(): void {
        const settings = this.svcData.group.createDataGroup({
            key: 'settings',
            groupName: this.translate.instant('APP.SETTING.TITLE'),
            component: ViewToken.Settings
        }, this.data);

        this.data.subGroups?.set(settings._key, settings);
    }

    addSearch(): void {
        const search = this.svcData.group.createDataGroup({
            key: 'search',
            groupName: this.translate.instant('APP.SEARCH.TITLE'),
            component: ViewToken.Search,
            visible: false
        }, this.data);

        this.data.subGroups?.set(search._key, search);
    }
}
