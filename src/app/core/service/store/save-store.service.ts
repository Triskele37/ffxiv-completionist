import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { ElectronService, IPC_EVENT } from '@service/electron/electron.service';
import { ConfigStoreService } from '@service/store/config-store.service';

import { migrateData } from './migration';
import { Store } from './Store';
import { SaveStore } from './Store.d';

@Injectable({
    providedIn: 'root'
})
export class SaveStoreService extends Store<SaveStore> {
    ipcGetEvent = IPC_EVENT.GET_SAVE;
    ipcSaveEvent = IPC_EVENT.SET_SAVE;
    failedSummaryKey = 'TOAST.SAVE_FAILED_SUMMARY';
    failedDetailKey = 'TOAST.SAVE_FAILED_DETAIL';

    constructor(
        translate: TranslateService,
        primeMessage: MessageService,
        svcElectron: ElectronService,
        private svcConfigStore: ConfigStoreService
    ) {
        super(translate, primeMessage, svcElectron);

        const successful = this.load();

        // On failure, the config must be reloaded since it is changed in the main process
        if(!successful) this.svcConfigStore.load();
    }

    migrateData(): void {
        migrateData(this);
    }
}
