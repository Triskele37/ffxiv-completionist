import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

// If you import a module but never use any of the imported values
// other than as TypeScript types, the resulting javascript file
// will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';

export enum IPC_EVENT {
    APP_READY = 'app-ready',
    GET_CONFIG = 'get-config',
    SET_CONFIG = 'set-config',
    NEW_SAVE = 'new-save',
    LOAD_SAVE = 'load-save',
    OPEN_CONFIG = 'open-config',
    BACKUP_CONFIG = 'backup-config',
    LOAD_BACKUP_CONFIG = 'load-backup-config',
    GET_SAVE = 'get-save',
    SET_SAVE = 'set-save',
    OPEN_SAVE = 'open-save',
    BACKUP_SAVE = 'backup-save',
    LOAD_BACKUP_SAVE = 'load-backup-save',
    LOAD_JSON = 'load-json',
    SEARCH_CONSOLE_GAMES = 'search-console-games',
    SEARCH_GAMER_ESCAPE = 'search-gamer-escape',
    SEARCH_GARLAND_TOOLS = 'search-garland-tools',
    OPEN_IN_GARLAND_TOOLS = 'open-in-garland-tools',
    OPEN_IN_TEAMCRAFT = 'open-in-teamcraft'
}

@Injectable({
    providedIn: 'root'
})
export class ElectronService {
    appReady$ = new AsyncSubject<void>();

    ipcRenderer: typeof ipcRenderer;

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
        return this.ipcRenderer.sendSync(action, ...args);
    }
}
