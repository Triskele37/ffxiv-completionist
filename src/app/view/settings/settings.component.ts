import { Component, OnInit } from '@angular/core';

import { Completion } from '@constant';
import { DataService } from '@data';
import { ConfigStoreService } from '@service/store/config-store.service';

@Component({
    selector: 'xiv-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    settings: Settings = {
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

    startingClasses: string[] = [
        'Arcanist',
        'Archer',
        'Conjurer',
        'Gladiator',
        'Lancer',
        'Marauder',
        'Pugilist',
        'Rogue',
        'Thaumaturge',
    ];

    constructor(
        private svcData: DataService,
        private svcConfigStore: ConfigStoreService,
    ) {
    }

    ngOnInit() {
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

    onChangeStartingClass(): void {
        this.onChangeStringSetting(this.settings.startingClass);
        this.chainStartingClass();
    }

    onChainingEnabledChange(): void {
        this.onChangeBoolSetting(this.settings.chainingEnabled);
        if(this.settings.chainingEnabled.value) this.chainStartingClass();
    }

    chainStartingClass(): void {
        const baseQuestPath = 'duty.quests.main-scenario.seventh-umbral-era';

        const getTask = (taskPath: string, id: number) =>
            this.svcData.data.getChildGroupFromPath(taskPath).getTaskById(id);

        const gridania = getTask(`${baseQuestPath}.gridania`, 65660);
        const limsa = getTask(`${baseQuestPath}.limsa-lominsa`, 65645);
        const uldah = getTask(`${baseQuestPath}.uldah`, 66106);

        switch(this.settings.startingClass.value) {
            case 'Archer': case 'Lancer': case 'Conjurer':
                gridania.changeCompletionFlag(Completion.Y, true);
                gridania.setCompletionFlag(Completion.N);
                break;
            case 'Marauder': case 'Arcanist': case 'Rogue':
                limsa.changeCompletionFlag(Completion.Y, true);
                limsa.setCompletionFlag(Completion.N);
                break;
            case 'Gladiator': case 'Pugilist': case 'Thaumaturge':
                uldah.changeCompletionFlag(Completion.Y, true);
                uldah.setCompletionFlag(Completion.N);
                break;
            // default: TODO: why was there a default
            //     gridania.changeCompletionFlag(Completion.Y, true);
            //     gridania.changeCompletionFlag(Completion.N, true);
        }

        this.svcData.applyDataToStore();
    }
}

interface Settings {
    storeName: StringSetting;
    storeLocation: StringSetting;
    startingClass: StringSetting;
    lang: StringSetting;
    tableFilters: {
        completed: BoolSetting;
        incomplete: BoolSetting;
        excluded: BoolSetting;
    };
    chainingEnabled: BoolSetting;
    chainHistoryLimit: NumberSetting;
    chainMinThreshold: NumberSetting;
}

type Setting = {
    key: string;
};

type StringSetting = Setting & {
    value?: string;
};

type BoolSetting = Setting & {
    value?: boolean;
};

type NumberSetting = Setting & {
    value?: number;
    min: number;
    max: number;
};
