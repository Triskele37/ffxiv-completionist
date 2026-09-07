import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { PlayerSave, SaveLoad } from '@common/PlayerSave';
import { ElectronService } from '@service/electron/electron.service';
import { ConfigStoreService } from '@service/store/config-store.service';

import { migrateData } from './migration';
import { Store } from './Store';

@Injectable({
    providedIn: 'root'
})
export class SaveStoreService extends Store<PlayerSave> {
    private svcConfigStore = inject(ConfigStoreService);

    failedSummaryKey = 'APP.TOAST.SAVE_FAILED_SUMMARY';
    failedDetailKey = 'APP.TOAST.SAVE_FAILED_DETAIL';

    constructor() {
        const translate = inject(TranslateService);
        const primeMessage = inject(MessageService);
        const svcElectron = inject(ElectronService);

        super(translate, primeMessage, svcElectron);

        const successful = this.load();

        // On failure, the config must be reloaded since it is changed in the main process
        if(!successful) this.svcConfigStore.load();
    }

    getStore(): SaveLoad {
        return this.svcElectron.getSave();
    }

    setStore(save: PlayerSave): void {
        this.svcElectron.setSave(save);
    }

    migrateData(): void {
        migrateData(this.svcConfigStore, this);
    }
}
