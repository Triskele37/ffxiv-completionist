import { BrowserWindow, dialog } from 'electron';
import * as path from 'path';

import { store, saveConfig } from './store/configStore';

export const createNewStore = (window) => () => {
    const result = dialog.showSaveDialogSync({
        defaultPath: store.config['store-loc'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    updateConfig(window, result);
};

export const moveStoreLocation = (window) => async (menuItem, browserWindow, event) => {
    const result = await dialog.showOpenDialog(window, {
        defaultPath: store.config['store-loc'],
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    updateConfig(window, result?.[0]);
};

function updateConfig(window: BrowserWindow, result) {
    // Do stuff only if something was selected
    if(result) {
        // Modify the location the app points to
        const selected = path.parse(result);
        store.config['store-loc'] = selected.dir;
        store.config['store-name'] = selected.name;
        saveConfig();

        window.reload();
    }
}
