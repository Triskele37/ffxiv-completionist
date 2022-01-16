import { Component, OnInit } from '@angular/core';

import { Completion } from '@constant';
import { data } from '@data';
import { ConfigStoreService } from '@service/store/config-store.service';
import { SaveStoreService } from '@service/store/save-store.service';

@Component({
    selector: 'xiv-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    devMode: boolean = false;
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
        chainMinThreshold: { key: 'chain-min-threshold' },

        // Developer settings
        idColumnEnabled: { key: 'id-column-enabled' },
        maintainMigrationVersion: { key: 'maintain-version' },
        runVolatileMigrationsOnce: { key: 'run-volatile' }
    };

    constructor(private svcSaveStore: SaveStoreService) {
    }

    ngOnInit() {
        const loadSetting = (obj) => obj.value = ConfigStoreService.get(obj.key);

        loadSetting(this.settings.storeName);
        loadSetting(this.settings.storeLocation);
        loadSetting(this.settings.startingClass);
        loadSetting(this.settings.lang);
        loadSetting(this.settings.tableFilters.completed);
        loadSetting(this.settings.tableFilters.incomplete);
        loadSetting(this.settings.tableFilters.excluded);
        loadSetting(this.settings.chainingEnabled);
        loadSetting(this.settings.chainMinThreshold);

        if(process.env.NODE_ENV === 'development') {
            this.devMode = true;

            loadSetting(this.settings.idColumnEnabled);
            loadSetting(this.settings.maintainMigrationVersion);
            loadSetting(this.settings.runVolatileMigrationsOnce);
        }
    }

    onChangeStringSetting($event, path) {
        ConfigStoreService.set(path, $event.target.value);
    }

    onChangeBoolSetting($event, path) {
        ConfigStoreService.set(path, $event.target.checked);
    }

    onChangeNumSetting($event, setting) {
        let newValue = parseInt($event.target.value, 10);
        if(newValue < $event.target.min) newValue = $event.target.min;
        else if(newValue > $event.target.max) newValue = $event.target.max;

        ConfigStoreService.set(setting.key, newValue);
        setting.value = newValue;
    }

    onChangeStartingClass($event, path) {
        this.onChangeStringSetting($event, path);

        const startingClass = $event.target.value;
        const baseQuestPath = 'duty.quests.main-scenario.seventh-umbral-era';

        const getTask = (taskPath, id) => data.getChildGroupFromPath(taskPath).tasks[id];

        const gridania = getTask(`${baseQuestPath}.gridania`, 'x65660');
        const limsa = getTask(`${baseQuestPath}.limsa-lominsa`, 'x65645');
        const uldah = getTask(`${baseQuestPath}.uldah`, 'x66106');

        switch(startingClass) {
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

        this.svcSaveStore.applyDataToStore();
    }
}

type KeyType = string;
type ValueType = any;
interface Settings {
    [key: string]: KeyType | ValueType | Settings;
    key?: KeyType;
    value?: ValueType;
}
