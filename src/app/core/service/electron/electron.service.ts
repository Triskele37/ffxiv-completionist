import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AsyncSubject } from 'rxjs';

// Relying on tree-shaking to not actually include this import
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

    ipcRenderer?: typeof ipcRenderer;

    constructor(
        private svcMessage: MessageService,
        private translate: TranslateService,
    ) {
        // Conditional imports
        if(this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;

            // This handles F5 refreshes for dev use
            window.addEventListener('beforeunload', () => {
                this.ipcRenderer?.invoke(IPC_EVENT.APP_REFRESH);
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

    // Let the app layer know about refreshing BEFORE it happens
    async reloadApp(): Promise<void> {
        await this.ipcRenderer?.invoke(IPC_EVENT.APP_REFRESH);
        location.reload();
    }

    sendSync(action: IPC_EVENT, ...args: any[]): any {
        if(SHIM_EVENTS.includes(action)) {
            copyLinkShim(this.svcMessage, this.translate, action, ...args);
            return;
        }

        return this.ipcRenderer?.sendSync(action, ...args);
    }
}
