import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AsyncSubject } from 'rxjs';

// If you import a module but never use any of the imported values
// other than as TypeScript types, the resulting javascript file
// will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';

import { copyLinkShim } from '@model/External/copyLinkShim';

import { IPC_EVENT } from './IPC_EVENT';

const SHIM_EVENTS: IPC_EVENT[] = [
    IPC_EVENT.SEARCH_CONSOLE_GAMES,
    IPC_EVENT.SEARCH_GAMER_ESCAPE,
    IPC_EVENT.SEARCH_GARLAND_TOOLS,
    IPC_EVENT.OPEN_IN_GARLAND_TOOLS,
    IPC_EVENT.OPEN_IN_TEAMCRAFT,
];

@Injectable({
    providedIn: 'root'
})
export class ElectronService {
    appReady$ = new AsyncSubject<void>();

    ipcRenderer: typeof ipcRenderer;

    constructor(
        private svcMessage: MessageService,
        private translate: TranslateService,
    ) {
        // Conditional imports
        if(this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;

            // Let the app layer know about refreshing
            window.addEventListener('beforeunload', () => {
                this.sendSync(IPC_EVENT.APP_REFRESH);
            });
        }
    }

    get isElectron(): boolean {
        return !!window?.process?.type; // === 'renderer';
    }

    setAppReady(): void {
        this.appReady$.next();
        this.appReady$.complete();
    }

    sendSync(action: IPC_EVENT, ...args: any[]): any {
        if(SHIM_EVENTS.includes(action)) {
            copyLinkShim(this.svcMessage, this.translate, action, ...args);
            return;
        }

        return this.ipcRenderer.sendSync(action, ...args);
    }
}
