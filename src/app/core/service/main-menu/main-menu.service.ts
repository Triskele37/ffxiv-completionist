import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { GuideComponent } from '../../../view/main-menu/guide/guide.component';
import { SearchComponent } from '../../../view/search/search.component';
import { PatchNotesComponent } from '../../../view/main-menu/patch-notes/patch-notes.component';
import { RandomComponent } from '../../../view/main-menu/random/random.component';
import { SettingsComponent } from '../../../view/main-menu/settings/settings.component';

import { DataGroup } from '@domain/DataGroup';

/** Has to be a service so TranslateService can load the group names properly
 * */
@Injectable({ providedIn: 'root' })
export class MainMenuService {
    data: DataGroup;

    constructor(private translate: TranslateService) {
        this.data = new DataGroup({
            key: 'main-menu',
            groupName: this.translate.instant('MAIN.TITLE'),
            noContent: true,
            isUiGroup: true
        }, null);

        this.data.subGroups = [
            this.newGuide,
            this.newPatchNotes,
            this.newRandom,
            this.newSettings,
            this.newSearch
        ];
    }

    get newGuide(): DataGroup {
        return new DataGroup({
            key: 'guide',
            groupName: this.translate.instant('MAIN.GUIDE.TITLE'),
            component: GuideComponent
        }, this.data);
    }

    get newPatchNotes(): DataGroup {
        return new DataGroup({
            key: 'patch-notes',
            groupName: this.translate.instant('MAIN.NOTES.TITLE'),
            component: PatchNotesComponent
        }, this.data);
    }

    get newRandom(): DataGroup {
        return new DataGroup({
            key: 'random',
            groupName: this.translate.instant('MAIN.RANDOM.TITLE'),
            component: RandomComponent
        }, this.data);
    }

    get newSettings(): DataGroup {
        return new DataGroup({
            key: 'settings',
            groupName: this.translate.instant('MAIN.SETTING.TITLE'),
            component: SettingsComponent
        }, this.data);
    }

    get newSearch(): DataGroup {
        return new DataGroup({
            key: 'search',
            groupName: this.translate.instant('MAIN.SEARCH.TITLE'),
            component: SearchComponent,
            visible: false
        }, this.data);
    }

}
