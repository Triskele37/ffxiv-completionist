import { Injectable } from '@angular/core';

import { ElectronService } from '@service/electron/electron.service';

import { Store } from './Store';
import { ConfigStore } from './Store.d';

@Injectable({
    providedIn: 'root'
})
export class ConfigStoreService {
    private static store: Store<ConfigStore> = new Store(
        ElectronService.remote.app.getPath('userData')
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

    setDefaultConfig(key: string, defaultValue: any): void {
        if(ConfigStoreService.get(key) === undefined) {
            ConfigStoreService.set(key, defaultValue);
        }
    }

    static get(key: string): any {
        return this.store.get(key);
    }

    static set(key: string, value: any): void {
        this.store.set(key, value);
    }
}
