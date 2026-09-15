import type { TranslateService } from '@ngx-translate/core';
import type { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import type { JSONResource } from '@model/JSONResource';
import type { ElectronService } from '@service/electron/electron.service';

//#region ------------------------------------------------------- Methods
import { loadStore } from './methods/loadStore';
import { saveStore } from './methods/saveStore';
import { getValue } from './methods/getValue';
import { setValue } from './methods/setValue';
import { deleteValue } from './methods/deleteValue';

//#endregion

export abstract class Store<StoreType extends JSONResource> {
    translate: TranslateService;
    primeMessage: MessageService;
    svcElectron: ElectronService;

    abstract failedSummaryKey: string;
    abstract failedDetailKey: string;

    data?: StoreType;
    updated$ = new Subject<StoreType>();

    protected constructor(
        translate: TranslateService,
        primeMessage: MessageService,
        svcElectron: ElectronService,
    ) {
        this.translate = translate;
        this.primeMessage = primeMessage;
        this.svcElectron = svcElectron;
    }

    abstract getStore(): { data: StoreType; successful: boolean };
    abstract setStore(data: StoreType): void;

    get loadStore() { return loadStore(this); }
    get saveStore() { return saveStore(this); }

    get get() { return getValue(this); }
    get set() { return setValue(this); }
    get delete() { return deleteValue(this); }
}
