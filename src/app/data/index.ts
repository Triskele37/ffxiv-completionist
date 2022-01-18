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

@Injectable({ providedIn: 'root' })
export class DataService {
    data: DataGroup;
    whenLoaded$: AsyncSubject<void> = new AsyncSubject<void>();

    constructor(
        private svcElectron: ElectronService,
        private svcSaveStore: SaveStoreService,
    ) {
        DataGroup.svcElectron = this.svcElectron;
        this.data = DataGroup.fromJSON(null, './index');

        this.data.subGroups = [
            // Bookmarks added in svcBookmarks
            DataGroup.fromDefinition(this.data, CHARACTER_DEFINITION),
            DataGroup.fromDefinition(this.data, DUTY_DEFINITION),
            DataGroup.fromDefinition(this.data, LOGS_DEFINITION),
            DataGroup.fromDefinition(this.data, TRAVEL_DEFINITION),
            DataGroup.fromDefinition(this.data, SOCIAL_DEFINITION),
            // Custom Tasks added in svcCustomTasks
        ];
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
        subGroupOrTasks[task.storageKey] = task.completionFlag;
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
            if(!group.isNumericCompletion) {
                task.setCompletionFlag(storeGroup[task.storageKey]);
            }
            else {
                task.setCompletionNumber(storeGroup[task.storageKey]);
            }
        }
    });
}
