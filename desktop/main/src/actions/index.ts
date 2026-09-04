import { ipcMain } from 'electron';

import { ConfigStore } from '../store/ConfigStore';
import { PlayerStore } from '../store/PlayerStore';
import { WindowStore } from '../store/WindowStore';

import { getData } from './getData';
import { importCustom, exportCustom } from './shareCustom';
import { preloadJson } from './preloadJson';

export function initActions() {
    ipcMain.on('app-ready', WindowStore.showMainWindow);
    ipcMain.handle('app-refresh', async () => {
        // allows refreshes to receive updates /resources
        await preloadJson();
    });
    ipcMain.on('get-data', getData);

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

    ipcMain.on('import-custom', importCustom);
    ipcMain.on('export-custom', exportCustom);
}
