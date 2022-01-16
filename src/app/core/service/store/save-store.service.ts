import { Injectable } from '@angular/core';

import { ElectronService } from '@service/electron/electron.service';

import { migrateData } from './migration';
import { Store } from './Store';
import { SaveStore } from './Store.d';

@Injectable({
    providedIn: 'root'
})
export class SaveStoreService {
    store: Store<SaveStore>;

    constructor(
        private svcElectron: ElectronService,
    ) {
        this.store = new Store(svcElectron, 'get-save', 'set-save');
    }

    migrateData() {
        migrateData(this);
    }

    get(path?: string): any {
        return this.store.get(path);
    }

    set(path: string, value: any): void {
        this.store.set(path, value);
    }

    delete(path: string) {
        this.store.delete(path);
    }
}
