import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AsyncSubject } from 'rxjs';

import { MainApi } from '@common/MainApi';
import { JsonCache } from '@common/JsonCache';
import { ConfigLoad, ConfigObj } from '@common/Config';
import { PlayerSave, SaveLoad } from '@common/PlayerSave';
import { CustomMeta } from '@common/CustomContent';
import { Migration } from '@common/Migration';

import { copyLinkShim } from '@model/External/copyLinkShim';

@Injectable({
    providedIn: 'root'
})
export class ElectronService implements MainApi {
    private svcMessage = inject(MessageService);
    private translate = inject(TranslateService);

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
    onAppReady(): void {
        window.electron.onAppReady();
    }

    getVersion(): string {
        return window.electron.getVersion();
    }

    getData(): JsonCache {
        return window.electron.getData();
    }

    getMigration(version: string): Migration | undefined {
        return window.electron.getMigration(version);
    }

    getConfig(): ConfigLoad {
        return window.electron.getConfig();
    }

    setConfig(config: ConfigObj): void {
        window.electron.setConfig(config);
    }

    newSave(): boolean {
        return window.electron.newSave();
    }

    loadSave(): boolean {
        return window.electron.loadSave();
    }

    openConfig(): void {
        window.electron.openConfig();
    }

    backupConfig(): void {
        window.electron.backupConfig();
    }

    loadBackupConfig(): boolean {
        return window.electron.loadBackupConfig();
    }

    getSave(): SaveLoad {
        return window.electron.getSave();
    }

    setSave(save: PlayerSave): void {
        window.electron.setSave(save);
    }

    openSave(): void {
        window.electron.openSave();
    }

    backupSave(): void {
        window.electron.backupSave();
    }

    loadBackupSave(): boolean {
        return window.electron.loadBackupSave();
    }

    importCustom(): CustomMeta | false | null {
        return window.electron.importCustom();
    }

    exportCustom(customMeta: CustomMeta): void {
        window.electron.exportCustom(customMeta);
    }

    //#endregion

    //#region------------------------------------------------------- Async Actions
    onAppRefresh(): Promise<void> {
        return window.electron.onAppRefresh();
    }

    //#endregion

    //#region------------------------------------------------------- Shim Actions
    searchConsoleGames(searchTerm: string) {
        copyLinkShim(this.svcMessage, this.translate, 'searchConsoleGames', searchTerm);
    }

    searchGamerEscape(searchTerm: string) {
        copyLinkShim(this.svcMessage, this.translate, 'searchGamerEscape', searchTerm);
    }

    searchGarlandTools(searchTerm: string) {
        copyLinkShim(this.svcMessage, this.translate, 'searchGarlandTools', searchTerm);
    }

    openInGarlandTools(ids: number[], groupName: string) {
        copyLinkShim(this.svcMessage, this.translate, 'openInGarlandTools', ids, groupName);
    }

    openInTeamcraft(ids: number[]) {
        copyLinkShim(this.svcMessage, this.translate, 'openInTeamcraft', ids);
    }

    //#endregion
}
