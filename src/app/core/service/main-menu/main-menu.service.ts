import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { InstructionsComponent } from '../../../view/main-menu/instructions/instructions.component';
import { SearchComponent } from '../../../view/search/search.component';
import { PatchNotesComponent } from '../../../view/main-menu/patch-notes/patch-notes.component';
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
            this.newInstructions,
            this.newPatchNotes,
            this.newSettings,
            this.newSearch
        ];
    }

    get newInstructions(): DataGroup {
        return new DataGroup({
            key: 'instructions',
            groupName: this.translate.instant('MAIN.GUIDE.TITLE'),
            component: InstructionsComponent
        }, this.data);
    }

    get newPatchNotes(): DataGroup {
        return new DataGroup({
            key: 'patch-notes',
            groupName: this.translate.instant('MAIN.NOTES.TITLE'),
            component: PatchNotesComponent
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
