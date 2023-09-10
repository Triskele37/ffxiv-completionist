import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { GuideComponent } from '../../../view/guide/guide.component';
import { PatchNotesComponent } from '../../../view/patch-notes/patch-notes.component';
import { RandomComponent } from '../../../view/random/random.component';
import { SettingsComponent } from '../../../view/settings/settings.component';
import { SearchComponent } from '../../../view/search/search.component';

import { DataGroup } from '@model/DataGroup';

/** Has to be a service so TranslateService can load the group names properly
 * */
@Injectable({
    providedIn: 'root'
})
export class MainMenuService {
    data: DataGroup;

    constructor(private translate: TranslateService) {
        this.data = new DataGroup({
            key: 'main-menu',
            groupName: this.translate.instant('MAIN.TITLE'),
            noContent: true,
            isUiGroup: true
        }, null);

        this.data.subGroups = new Map();
        this.addGuide();
        this.addPatchNotes();
        this.addRandom();
        this.addSettings();
        this.addSearch();
    }

    addGuide(): void {
        const guide = new DataGroup({
            key: 'guide',
            groupName: this.translate.instant('MAIN.GUIDE.TITLE'),
            component: GuideComponent
        }, this.data);

        this.data.subGroups.set(guide._key, guide);
    }

    addPatchNotes(): void {
        const patchNotes = new DataGroup({
            key: 'patch-notes',
            groupName: this.translate.instant('MAIN.NOTES.TITLE'),
            component: PatchNotesComponent
        }, this.data);

        this.data.subGroups.set(patchNotes._key, patchNotes);
    }

    addRandom(): void {
        const random = new DataGroup({
            key: 'random',
            groupName: this.translate.instant('MAIN.RANDOM.TITLE'),
            component: RandomComponent
        }, this.data);

        this.data.subGroups.set(random._key, random);
    }

    addSettings(): void {
        const settings = new DataGroup({
            key: 'settings',
            groupName: this.translate.instant('MAIN.SETTING.TITLE'),
            component: SettingsComponent
        }, this.data);

        this.data.subGroups.set(settings._key, settings);
    }

    addSearch(): void {
        const search = new DataGroup({
            key: 'search',
            groupName: this.translate.instant('MAIN.SEARCH.TITLE'),
            component: SearchComponent,
            visible: false
        }, this.data);

        this.data.subGroups.set(search._key, search);
    }

}
