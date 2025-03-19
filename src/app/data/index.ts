import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AsyncSubject } from 'rxjs';

import { Globals } from '@constant/Global';
import { refs } from '@data/loader';
import { DataGroup } from '@model/DataGroup';
import { fromDefinition } from '@model/DataGroup/createDataGroup/fromDefinition';
import { fromJson } from '@model/DataGroup/createDataGroup/fromJson';
import { setCompletion } from '@model/Task/completion/setCompletion';
import { ElectronService } from '@service/electron/electron.service';
import { SaveStoreService } from '@service/store/save-store.service';

import { ConfigStoreService } from '@service/store/config-store.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: DataGroup;
    whenLoaded$: AsyncSubject<void> = new AsyncSubject<void>();

    constructor(
        private translate: TranslateService,
        private svcElectron: ElectronService,
        private svcConfigStore: ConfigStoreService, // needs to be here to load lang right
        private svcSaveStore: SaveStoreService,
    ) {
        // Give the loader util references
        refs.svcElectron = this.svcElectron;
        refs.translate = this.translate;

        this.data = fromJson(null, '');
        Globals.allData = this.data;

        this.data.subGroups = new Map();
        this.data.subGroups.set('bookmarks', null);
        this.data.subGroups.set('custom', null);

        this.data.order.forEach((subGroupKey) => {
            const subGroup = fromDefinition(this.data, subGroupKey);
            this.data.subGroups.set(subGroup._key, subGroup);
        });
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
            setCompletion(task, storeGroup[task.storageKey]);
        }
    });
}
