import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ElectronService } from '@service/electron/electron.service';
import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { ConfigStore } from './Store.d';
import { Store } from './Store';

@Injectable({
    providedIn: 'root'
})
export class ConfigStoreService {
    store: Store<ConfigStore>;

    constructor(
        private translate: TranslateService,
        private svcElectron: ElectronService,
    ) {
        this.store = new Store(svcElectron, 'get-config', 'set-config');

        DataGroup.lang = this.store.get('lang');
        Task.chainingEnabled = this.store.get('chaining-enabled');
    }

    get(key: string): any {
        return this.store.get(key);
    }

    set(key: string, value: any): void {
        this.store.set(key, value);

        if(key === 'lang') DataGroup.lang = value;
        if(key === 'chaining-enabled') Task.chainingEnabled = value;
    }
}
