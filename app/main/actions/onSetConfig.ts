import { ipcMain } from 'electron';

import { saveConfig, store } from '../store';

export function onSetConfig() {
    ipcMain.on('set-config', (event, newConfig) => {
        store.config = newConfig;
        saveConfig();

        event.returnValue = null;
    });
}
