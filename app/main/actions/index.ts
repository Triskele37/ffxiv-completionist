import { ipcMain } from 'electron';

import { ConfigStore } from '../store/ConfigStore';
import { PlayerStore } from '../store/PlayerStore';
import { WindowStore } from '../store/WindowStore';

import { clearCache, preloadJson } from './preloadJson';
import { loadJson } from './loadJson';

export function initActions() {
    ipcMain.on('app-ready', WindowStore.showMainWindow);
    ipcMain.on('app-refresh', () => {
        clearCache();
        preloadJson();
    });
    ipcMain.on('load-json', loadJson);

    ipcMain.on('get-config', ConfigStore.get);
    ipcMain.on('set-config', ConfigStore.set);
    ipcMain.on('new-save', ConfigStore.newSave);
    ipcMain.on('load-save', ConfigStore.loadSave);
    ipcMain.on('open-config', ConfigStore.open);
    ipcMain.on('backup-config', ConfigStore.backup);
    ipcMain.on('load-backup-config', ConfigStore.loadBackup);

    ipcMain.on('get-save', PlayerStore.get);
    ipcMain.on('set-save', PlayerStore.set);
    ipcMain.on('open-save', PlayerStore.open);
    ipcMain.on('backup-save', PlayerStore.backup);
    ipcMain.on('load-backup-save', PlayerStore.loadBackup);
}
