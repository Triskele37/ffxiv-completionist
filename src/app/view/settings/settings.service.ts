import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ConfigStoreService } from '@service/store/config-store.service';

import { BoolSetting, NumberSetting, Settings, StringSetting } from './settings';

/** Handles Settings between components
 * */
@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    settings: Settings = {
        storeName: { key: 'store-name' },
        storeLocation: { key: 'store-loc' },
        startingClass: { key: 'starting-class' },
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
        private svcConfigStore: ConfigStoreService
    ) {
    }

    init() {
        const load = (obj) => {
            if(obj.key) obj.value = this.svcConfigStore.get(obj.key);
            else Object.keys(obj).forEach((key) => load(obj[key]));
        };

        load(this.settings);
    }

    onChangeStringSetting(setting: StringSetting): void {
        this.svcConfigStore.set(setting.key, setting.value);
    }

    onChangeBoolSetting(setting: BoolSetting): void {
        this.svcConfigStore.set(setting.key, setting.value);
    }

    onChangeNumSetting(setting: NumberSetting): void {
        if(setting.value < setting.min) setting.value = setting.min;
        else if(setting.value > setting.max) setting.value = setting.max;

        this.svcConfigStore.set(setting.key, setting.value);
    }
}
