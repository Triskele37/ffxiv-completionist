import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { DataGroup } from '@domain/DataGroup';
import { Task } from '@domain/Task';
import { ElectronService, IPC_EVENT } from '@service/electron/electron.service';

import { ConfigStore } from './Store.d';
import { Store } from './Store';

@Injectable({
    providedIn: 'root'
})
export class ConfigStoreService extends Store<ConfigStore> {
    ipcGetEvent = IPC_EVENT.GET_CONFIG;
    ipcSaveEvent = IPC_EVENT.SET_CONFIG;
    failedSummaryKey = 'TOAST.CONFIG_FAILED_SUMMARY';
    failedDetailKey = 'TOAST.CONFIG_FAILED_DETAIL';

    constructor(
        translate: TranslateService,
        primeMessage: MessageService,
        svcElectron: ElectronService,
    ) {
        super(translate, primeMessage, svcElectron);
        this.load();

        DataGroup.lang = this.get('lang');
        Task.chainingEnabled = this.get('chaining-enabled');
    }

    set(key: string, value: any): void {
        super.set(key, value);

        if(key === 'lang') DataGroup.lang = value;
        if(key === 'chaining-enabled') Task.chainingEnabled = value;
    }
}
