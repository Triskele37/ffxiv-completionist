import { Component, OnInit } from '@angular/core';

import { data } from '@data';
import { StoreService } from '@service/store/store.service';

@Component({
    selector: 'xiv-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    devMode = process.env.NODE_ENV === 'development';
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

    constructor(private svcStore: StoreService) {
    }

    ngOnInit() {
        const diveSettings = (obj) => {
            for(const key in obj) {
                if(obj.hasOwnProperty(key)) {
                    if(obj[key].key) obj[key].value = this.svcStore.eStore.get(obj[key].key);
                    else diveSettings(obj[key]);
                }
            }
        };

        diveSettings(this.settings);
    }

    onChangeStringSetting($event, path) {
        this.svcStore.eStore.set(path, $event.target.value);
    }

    onChangeBoolSetting($event, path) {
        this.svcStore.eStore.set(path, $event.target.checked);
    }

    onChangeNumSetting($event, setting) {
        let newValue = parseInt($event.target.value, 10);
        if(newValue < $event.target.min) newValue = $event.target.min;
        else if(newValue > $event.target.max) newValue = $event.target.max;

        this.svcStore.eStore.set(setting.key, newValue);
        setting.value = newValue;

        //TODO this.$forceUpdate(); // Shows when invalid inputs are changed
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
                gridania.changeCompletionFlag('Y', true);
                gridania.setCompletionFlag('N');
                break;
            case 'Marauder': case 'Arcanist': case 'Rogue':
                limsa.changeCompletionFlag('Y', true);
                limsa.setCompletionFlag('N');
                break;
            case 'Gladiator': case 'Pugilist': case 'Thaumaturge':
                uldah.changeCompletionFlag('Y', true);
                uldah.setCompletionFlag('N');
                break;
            default:
                gridania.changeCompletionFlag('Y', true);
                gridania.changeCompletionFlag('N', true);
        }

        this.svcStore.applyDataToStore();
    }
}

type KeyType = string;
type ValueType = any;
interface Settings {
    [key: string]: KeyType | ValueType | Settings;
    key?: KeyType;
    value?: ValueType;
}
