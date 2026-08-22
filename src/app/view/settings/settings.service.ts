import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ConfigStoreService } from '@service/store/config-store.service';
import { SaveStoreService } from '@service/store/save-store.service';

import { AnySetting, BoolSetting, NumberSetting, Settings, StringSetting } from './settings';

/** Handles Settings between components
 * */
@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    settings: Settings = {
        storeName: { key: 'store-name' },
        storeLocation: { key: 'store-loc' },
        startingClass: { key: 'starting-class', inSave: true },
        lang: { key: 'lang' },
        useShortNames: { key: 'use-short-names' },
        tableFilters: {
            completed: { key: 'table-filters.completed' },
            incomplete: { key: 'table-filters.incomplete' },
            excluded: { key: 'table-filters.excluded' },
        },
        showCompletedGroups: { key: 'show-completed-groups' },
        showEmptyGroups: { key: 'show-empty-groups' },
        chainingEnabled: { key: 'chaining-enabled' },
        chainHistoryLimit: { key: 'chain-history-limit', min: 0, max: 99 },
        chainMinThreshold: { key: 'chain-min-threshold', min: 1, max: 999 },
    };

    onChainingEnabled$ = new Subject<void>();

    constructor(
        private svcConfigStore: ConfigStoreService,
        private svcSaveStore: SaveStoreService,
    ) {
        const load = (obj: any) => {
            if(obj.key) {
                obj.value = this.getSetting(obj);
            }
            else {
                Object.keys(obj).forEach((key) => load(obj[key]));
            }
        };

        load(this.settings);
    }

    getSetting(setting: AnySetting): boolean | number | string | undefined {
        if(setting.inSave) return this.svcSaveStore.get(setting.key);
        else return this.svcConfigStore.get(setting.key);
    }

    setSetting(setting: AnySetting): void {
        if(setting.inSave) {
            this.svcSaveStore.set(setting.key, setting.value);
        }
        else {
            this.svcConfigStore.set(setting.key, setting.value);
        }
    }

    onChangeStringSetting(setting: StringSetting): void {
        this.setSetting(setting);
    }

    onChangeBoolSetting(setting: BoolSetting): void {
        this.setSetting(setting);
    }

    onChangeNumSetting(setting: NumberSetting): void {
        if(setting.value === undefined) {
            if(setting.min) setting.value = setting.min;
        }
        else {
            if(setting.value < setting.min) setting.value = setting.min;
            else if(setting.value > setting.max) setting.value = setting.max;
        }

        this.setSetting(setting);
    }
}
