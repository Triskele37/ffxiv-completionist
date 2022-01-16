import { Injectable } from '@angular/core';

import { DataGroup } from '@domain/DataGroup';
import { ElectronService } from '@service/electron/electron.service';
import { SaveStoreService } from '@service/store/save-store.service';

import { CHARACTER_DEFINITION } from './definitions/character';
import { DUTY_DEFINITION } from './definitions/duty';
import { LOGS_DEFINITION } from './definitions/logs';
import { TRAVEL_DEFINITION } from './definitions/travel';
import { SOCIAL_DEFINITION } from './definitions/social';
import { Custom } from './custom';

@Injectable({ providedIn: 'root' })
export class DataService {
    data: DataGroup;

    constructor(
        private svcElectron: ElectronService,
        private svcSaveStore: SaveStoreService,
    ) {
        this.data = DataGroup.fromJSON(svcElectron, null, './index');

        this.data.subGroups = [
            DataGroup.fromDefinition(svcElectron, this.data, CHARACTER_DEFINITION),
            DataGroup.fromDefinition(svcElectron, this.data, DUTY_DEFINITION),
            DataGroup.fromDefinition(svcElectron, this.data, LOGS_DEFINITION),
            DataGroup.fromDefinition(svcElectron, this.data, TRAVEL_DEFINITION),
            DataGroup.fromDefinition(svcElectron, this.data, SOCIAL_DEFINITION),
            Custom(svcElectron, svcSaveStore, this.data),
        ];
    }

    initializeData(): void {
        this.svcSaveStore.migrateData();
        this.applyStoreToData();
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

    if(group.subGroups) {
        group.subGroups.forEach((subGroup) => {
            subGroupOrTasks[subGroup.storageKey] = diveForSave(subGroup);
        });
    }

    for(const id in group.tasks) {
        if(group.tasks.hasOwnProperty(id)) {
            const task = group.tasks[id];
            subGroupOrTasks[task.storageKey] = task.completionFlag;
        }
    }

    return subGroupOrTasks;
}

function diveForLoad(group: DataGroup, storeGroup: any): void {
    if(group.subGroups) {
        group.subGroups.forEach((subGroup) => {
            if(storeGroup[subGroup.storageKey]) {
                diveForLoad(subGroup, storeGroup[subGroup.storageKey]);
            }
        });
    }

    for(const id in group.tasks) {
        if(group.tasks.hasOwnProperty(id)) {
            const task = group.tasks[id];

            if(storeGroup[task.storageKey]) {
                if(!group.isNumericCompletion) {
                    task.setCompletionFlag(storeGroup[task.storageKey]);
                }
                else {
                    task.setCompletionNumber(storeGroup[task.storageKey]);
                }
            }
        }
    }
}
