import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

import { DataGroup } from '@domain/DataGroup';
import { ElectronService } from '@service/electron/electron.service';
import { SaveStoreService } from '@service/store/save-store.service';

import { CHARACTER_DEFINITION } from './definitions/character';
import { DUTY_DEFINITION } from './definitions/duty';
import { LOGS_DEFINITION } from './definitions/logs';
import { TRAVEL_DEFINITION } from './definitions/travel';
import { SOCIAL_DEFINITION } from './definitions/social';
import { ConfigStoreService } from '@service/store/config-store.service';
import { AtLinks, Links } from '@domain/Links';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: DataGroup;
    whenLoaded$: AsyncSubject<void> = new AsyncSubject<void>();

    constructor(
        private svcElectron: ElectronService,
        private svcConfigStore: ConfigStoreService, // needs to be here to load lang right
        private svcSaveStore: SaveStoreService,
    ) {
        DataGroup.svcElectron = this.svcElectron;
        this.data = DataGroup.fromJSON(null, './index');
        DataGroup.overall = this.data;

        this.data.subGroups = [
            // Bookmarks added in svcBookmarks
            DataGroup.fromDefinition(this.data, CHARACTER_DEFINITION),
            DataGroup.fromDefinition(this.data, DUTY_DEFINITION),
            DataGroup.fromDefinition(this.data, LOGS_DEFINITION),
            DataGroup.fromDefinition(this.data, TRAVEL_DEFINITION),
            DataGroup.fromDefinition(this.data, SOCIAL_DEFINITION),
            // Custom Tasks added in svcCustomTasks
        ];

        this.doShit();
    }

    achievements;
    quests;
    log = {};
    total = 0;
    doShit() {
        this.achievements = this.data.subGroups[0].subGroups[8];
        this.quests = this.data.subGroups[1].subGroups[1];
        this.diveShit(this.data);
        console.log('Unique:', Object.keys(this.log).length);
        console.log('Total:', this.total);
        console.dir(this.log);
    }

    diveShit(group: DataGroup) {
        group.subGroups?.forEach((subGroup) => this.diveShit(subGroup));

        try {
            if(group.cCombo) this.logShit(group.cCombo);
            group.tasks?.forEach((task) => {
                this.logShit(task.cPrev);
                this.logShit(task.cPrevAt);
                this.logShit(task.cPrevAny);
                this.logShit(task.cNext);
                this.logShit(task.cSiblings);
                this.logShit(task.cSiblingsAt);
                this.logShit(task.cCombo);
                this.logShit(task.cComboAt);
                this.logShit(task.cExclude);
                this.logShit(task.cExclusive);

                this.logShit(task.achievement);
            });
        }
        catch(e) {
            // console.error(e);
        }
    }

    logShit(value: any) {
        if(!value) return;
        if(typeof value === 'number') return;
        if(typeof value === 'string') {
            // if(value.substr(0, 2) === 'a.') {
            //     this.log[value] = this.getFullPath(value, this.achievements);
            //     this.total++;
            // }

            if(value.substr(0, 2) === 'q.') {
                this.log[value] = this.getFullPath(value, this.quests);
            }

            return;
        }

        if(Array.isArray(value)) {
            value.forEach((chain) => this.logShit(chain));
            return;
        }

        // is 'at' object
        Object.keys(value).forEach((level) => {
            this.logShit(value[level]);
        });
    }

    getFullPath(path: string, group) {
        let fullKey;
        try {
            fullKey = group
                .getChildTask(path)
                .fullStorageKey
                .replace('overall.', '');
        }
        catch(e) {
            console.log(path);
            console.error(e);
        }

        return fullKey;
    }

    // Must be called after all groups are attached
    initializeData(): void {
        this.svcSaveStore.migrateData();
        this.applyStoreToData();

        this.whenLoaded$.next();
        this.whenLoaded$.complete();
    }

    private applyStoreToData(): void {
        const dataToLoad = this.svcSaveStore.get(this.data.storageKey);
        if(dataToLoad) diveForLoad(this.data, dataToLoad);
    }

    applyDataToStore(): void {
        this.svcSaveStore.set(this.data.storageKey, diveForSave(this.data));
    }
}

function diveForSave(group: DataGroup): any {
    const subGroupOrTasks = {};

    group.subGroups?.forEach((subGroup) => {
        // Don't save anything from bookmarks
        if(subGroup.isBookmarkGroup) return;

        subGroupOrTasks[subGroup.storageKey] = diveForSave(subGroup);
    });

    group.tasks?.forEach((task) => {
        // Task doesn't need to be written if it is its default
        if(task.defaultCompletion !== task.completionFlag) {
            subGroupOrTasks[task.storageKey] = task.completionFlag;
        }
    });

    return subGroupOrTasks;
}

function diveForLoad(group: DataGroup, storeGroup: any): void {
    group.subGroups?.forEach((subGroup) => {
        if(storeGroup[subGroup.storageKey]) {
            diveForLoad(subGroup, storeGroup[subGroup.storageKey]);
        }
    });

    group.tasks?.forEach((task) => {
        if(storeGroup[task.storageKey]) {
            task.setCompletion(storeGroup[task.storageKey]);
        }
    });
}
