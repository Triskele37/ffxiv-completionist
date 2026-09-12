import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { ConfigLoad, ConfigObj } from '@common/Config';
import { ElectronService } from '@service/electron/electron.service';

import { Store } from './Store';

@Injectable({
    providedIn: 'root'
})
export class ConfigStoreService extends Store<ConfigObj> {
    failedSummaryKey = 'APP.TOAST.CONFIG_FAILED_SUMMARY';
    failedDetailKey = 'APP.TOAST.CONFIG_FAILED_DETAIL';

    navSettingUpdated$ = new Subject<void>();

    constructor() {
        const translate = inject(TranslateService);
        const primeMessage = inject(MessageService);
        const svcElectron = inject(ElectronService);

        super(translate, primeMessage, svcElectron);
        this.load();
    }

    getStore(): ConfigLoad {
        return this.svcElectron.getConfig();
    }

    setStore(config: ConfigObj): void {
        this.svcElectron.setConfig(config);
    }

    set(key: string, value: any): void {
        super.set(key, value);
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
