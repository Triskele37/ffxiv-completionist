import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { Globals } from '@constant/Global';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

import { ConfigStore } from './Store.d';
import { Store } from './Store';

@Injectable({
    providedIn: 'root'
})
export class ConfigStoreService extends Store<ConfigStore> {
    ipcGetEvent = IPC_EVENT.GET_CONFIG;
    ipcSaveEvent = IPC_EVENT.SET_CONFIG;
    failedSummaryKey = 'APP.TOAST.CONFIG_FAILED_SUMMARY';
    failedDetailKey = 'APP.TOAST.CONFIG_FAILED_DETAIL';

    navSettingUpdated$ = new Subject<void>();

    constructor(
        translate: TranslateService,
        primeMessage: MessageService,
        svcElectron: ElectronService,
    ) {
        super(translate, primeMessage, svcElectron);
        this.load();

        Globals.config = this.data;
    }

    set(key: string, value: any): void {
        super.set(key, value);

        Globals.config = this.data; // necessary?

        this.emitNavSettingUpdated(key);
    }

    private emitNavSettingUpdated(key: string) {
        const shouldEmit = [
            'show-completed-groups',
            'show-empty-groups',
        ].includes(key);

        if(shouldEmit) this.navSettingUpdated$.next();
    }
}
