import { Injectable } from '@angular/core';

import { data } from '@data';
import { DataGroup } from '@domain/DataGroup';
import { ElectronService } from '@service/electron/electron.service';

import { migrateData } from './migration';
import { Store } from './Store';
import { ConfigStore, SaveStore } from './Store.d';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    static eStore: Store<ConfigStore> = new Store(
        ElectronService.remote.app.getPath('userData')
    );

    static pStore: Store<SaveStore> = new Store(
        StoreService.eStore.get('store-loc'),
        StoreService.eStore.get('store-name')
    );

    constructor() {
        this.setDefaultConfig('store-name', 'completion');
        this.setDefaultConfig('store-loc', ElectronService.remote.app.getPath('userData'));
        this.setDefaultConfig('starting-class', '');
        this.setDefaultConfig('chaining-enabled', false);
        this.setDefaultConfig('chain-min-threshold', 10);
        this.setDefaultConfig('table-filters', {
            completed: true,
            incomplete: true,
            excluded: true
        });
    }

    initializeData(): void {
        migrateData();
        this.applyStoreToData();
    }

    setDefaultConfig(key: string, defaultValue: any): void {
        if(StoreService.eStore.get(key) === undefined) {
            StoreService.eStore.set(key, defaultValue);
        }
    }

    get eStore(): Store<ConfigStore> {
        return StoreService.eStore;
    }

    get pStore(): Store<SaveStore> {
        return StoreService.pStore;
    }

    applyStoreToData(): void {
        if(this.pStore.get[data.storageKey]) {
            diveForLoad(data, this.pStore.get[data.storageKey]);
        }
    }

    applyDataToStore(): void {
        this.pStore.set(data.storageKey, diveForSave(data));
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
