import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';

export abstract class Store<StoreType> {
    translate: TranslateService;
    primeMessage: MessageService;
    svcElectron: ElectronService;

    abstract ipcGetEvent: IPC_EVENT;
    abstract ipcSaveEvent: IPC_EVENT;

    abstract failedSummaryKey: string;
    abstract failedDetailKey: string;

    data: StoreType;
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

    load(): boolean {
        const { data, successful } = this.svcElectron.sendSync(this.ipcGetEvent);

        if(!successful) {
            this.svcElectron.appReady$.subscribe(() => {
                this.primeMessage.add({
                    summary: this.translate.instant(this.failedSummaryKey),
                    detail: this.translate.instant(this.failedDetailKey),
                    sticky: true
                });
            });
        }

        this.data = data;
        return successful;
    }

    get(path?: string): any {
        const segments = path?.split('.') || [];

        let obj = this.data;
        for(const segment of segments) {
            if(obj[segment] === undefined) return null;
            else obj = obj[segment];
        }

        return obj;
    }

    set(path: string, value: any): void {
        const segments = path.split('.');
        const key = segments.pop();

        let obj = this.data;
        for(const segment of segments) {
            if(!obj[segment]) obj[segment] = {};
            obj = obj[segment];
        }

        obj[key] = value;

        this.save();
    }

    delete(path: string): void {
        const segments = path.split('.');
        const key = segments.pop();

        let obj = this.data;
        for(const segment of segments) {
            if(!obj[segment]) return null;
            else obj = obj[segment];
        }

        delete obj[key];

        this.save();
    }

    save(): void {
        this.updated$.next(this.data);
        this.svcElectron.sendSync(this.ipcSaveEvent, this.data);
    }

}
