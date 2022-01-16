import { Injectable } from '@angular/core';

import { ElectronService } from '@service/electron/electron.service';
import { ConfigStore } from './Store.d';
import { Store } from './Store';

/** TODO:
 * Task chainingEnabled static property
 * DataGroup lang static property
 * */

@Injectable({
    providedIn: 'root'
})
export class ConfigStoreService {
    store: Store<ConfigStore>;

    constructor(private svcElectron: ElectronService) {
        this.store = new Store(svcElectron, 'get-config', 'set-config');
    }

    get(key: string): any {
        return this.store.get(key);
    }

    set(key: string, value: any): void {
        this.store.set(key, value);
    }
}
