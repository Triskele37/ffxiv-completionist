import { Injectable } from '@angular/core';

import { data } from '@data';
import { DataGroup } from '@domain/DataGroup';

import { ConfigStoreService } from './config-store.service';
import { migrateData } from './migration';
import { Store } from './Store';
import { SaveStore } from './Store.d';

@Injectable({
    providedIn: 'root'
})
export class SaveStoreService {
    static store: Store<SaveStore> = new Store(
        ConfigStoreService.get('store-loc'),
        ConfigStoreService.get('store-name')
    );

    constructor() {

    }

    initializeData(): void {
        migrateData();
        this.applyStoreToData();
    }

    get(path?: string): any {
        return SaveStoreService.store.get(path);
    }

    set(path: string, value: any): void {
        SaveStoreService.store.set(path, value);
    }

    delete(path: string) {
        SaveStoreService.store.delete(path);
    }

    private applyStoreToData(): void {
        const dataToLoad = this.get(data.storageKey);
        if(dataToLoad) diveForLoad(data, dataToLoad);
    }

    applyDataToStore(): void {
        this.set(data.storageKey, diveForSave(data));
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
