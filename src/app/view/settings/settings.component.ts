import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';

import { CharacterSettingsComponent } from './character/character-settings.component';
import * as Settings from './settings.d';

@Component({
    selector: 'xiv-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    settings: Settings.Settings = {
        storeName: { key: 'store-name' },
        storeLocation: { key: 'store-loc' },
        startingClass: { key: 'starting-class' },
        lang: { key: 'lang' },
        tableFilters: {
            completed: { key: 'table-filters.completed' },
            incomplete: { key: 'table-filters.incomplete' },
            excluded: { key: 'table-filters.excluded' }
        },
        chainingEnabled: { key: 'chaining-enabled' },
        chainHistoryLimit: { key: 'chain-history-limit', min: 0, max: 99 },
        chainMinThreshold: { key: 'chain-min-threshold', min: 1, max: 999 },
    };

    @ViewChild('characterSettings') characterSettings: CharacterSettingsComponent;

    constructor(private svcConfigStore: ConfigStoreService) {
    }

    ngOnInit(): void {
        const load = (obj) => {
            if(obj.key) obj.value = this.svcConfigStore.get(obj.key);
            else Object.keys(obj).forEach((key) => load(obj[key]));
        };

        load(this.settings);
    }

    onChangeStringSetting(setting: Settings.StringSetting): void {
        this.svcConfigStore.set(setting.key, setting.value);
    }

    onChangeBoolSetting(setting: Settings.BoolSetting): void {
        this.svcConfigStore.set(setting.key, setting.value);
    }

    onChangeNumSetting(setting: Settings.NumberSetting): void {
        if(setting.value < setting.min) setting.value = setting.min;
        else if(setting.value > setting.max) setting.value = setting.max;

        this.svcConfigStore.set(setting.key, setting.value);
    }

    onChainingEnabledChange(): void {
        this.onChangeBoolSetting(this.settings.chainingEnabled);
        if(this.settings.chainingEnabled.value) {
            this.characterSettings.chainStartingClass();
        }
    }
}
