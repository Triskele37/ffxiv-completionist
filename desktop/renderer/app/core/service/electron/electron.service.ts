import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

import { MainApi } from '@common/MainApi';

@Injectable({
    providedIn: 'root'
})
export class ElectronService implements MainApi {
    appReady$ = new AsyncSubject<void>();

    isReloading: boolean = false;

    constructor() {
        // This handles F5 refreshes for dev use
        window.addEventListener('beforeunload', () => {
            if(!this.isReloading) this.onAppRefresh();
            this.isReloading = false;
        });
    }

    setAppReady(): void {
        this.appReady$.next();
        this.appReady$.complete();
    }

    // Let the app layer know about refreshing BEFORE it happens
    async reloadApp(): Promise<void> {
        this.isReloading = true;
        await this.onAppRefresh();
        location.reload();
    }

    //#region------------------------------------------------------- Sync Actions
    onAppReady = window.electron.onAppReady;
    getVersion = window.electron.getVersion;
    getFeature = window.electron.getFeature;
    getData = window.electron.getData;
    getMigration = window.electron.getMigration;
    getConfig = window.electron.getConfig;
    setConfig = window.electron.setConfig;
    newSave = window.electron.newSave;
    loadSave = window.electron.loadSave;
    openConfig = window.electron.openConfig;
    backupConfig = window.electron.backupConfig;
    loadBackupConfig = window.electron.loadBackupConfig;
    getSave = window.electron.getSave;
    setSave = window.electron.setSave;
    openSave = window.electron.openSave;
    backupSave = window.electron.backupSave;
    loadBackupSave = window.electron.loadBackupSave;
    importCustom = window.electron.importCustom;
    exportCustom = window.electron.exportCustom;
    openExternalSingle = window.electron.openExternalSingle;
    openExternalMulti = window.electron.openExternalMulti;

    //#endregion

    //#region------------------------------------------------------- Async Actions
    onAppRefresh = window.electron.onAppRefresh;

    //#endregion

}
