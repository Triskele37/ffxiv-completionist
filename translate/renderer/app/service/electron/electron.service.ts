import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

// Relying on tree-shaking to not actually include this import
import type { ipcRenderer } from 'electron';

import { IPC_EVENT } from './IPC_EVENT';

@Injectable({
    providedIn: 'root'
})
export class ElectronService {
    appReady$ = new AsyncSubject<void>();

    ipcRenderer?: typeof ipcRenderer;

    constructor() {
        // Conditional imports
        if(this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
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
        return this.ipcRenderer?.sendSync(action, ...args);
    }
}
