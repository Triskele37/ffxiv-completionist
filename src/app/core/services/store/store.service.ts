import { Injectable } from '@angular/core';
import { app, remote } from 'electron';
import * as Store from 'electron-store';

import { data } from '../../../data';
import { DataGroup } from '../../../domain/DataGroup';

import { migrateData } from './migration';
import { ConfigStore } from './ConfigStore';
import { SaveStore } from './SaveStore';

// determine which import has app since both Main and Renderer processes hit this code
const appImport = !!app ? app : remote.app;

export const eStore: Store<ConfigStore> = new Store();
export const pStore = (): Store<SaveStore> => new Store({
    name: eStore.get('store-name'),
    cwd: eStore.get('store-loc')
} as Store.Options<SaveStore>);

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    eStore: Store<ConfigStore> = eStore;

    constructor() {
        this.setDefaultConfig('store-name', 'completion');
        this.setDefaultConfig('store-loc', appImport.getPath('userData'));
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
        if(this.eStore.get(key) === undefined) {
            this.eStore.set(key, defaultValue);
        }
    }

    //TODO: make like eStore and listen for eStore changes
    get pStore(): Store<SaveStore> {
        return pStore();
    }

    applyStoreToData(): void {
        if(this.pStore.store[data.storageKey]) {
            diveForLoad(data, this.pStore.store[data.storageKey]);
        }
    }

    applyDataToStore(): void {
        this.pStore.set({
            [data.storageKey]: diveForSave(data)
        });
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
