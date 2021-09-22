import path from 'path';
import { dialog } from "electron";

import { eStore } from "../store/electronStore";

export const moveStoreLocation = (mainWindow) => async (menuItem, browserWindow, event) => {
    const result = await dialog.showOpenDialog(mainWindow, {
        defaultPath: eStore.get('store-loc'),
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    // Do stuff only if something was selected
    if(result && result[0]) {
        // Modify the location the app points to
        const selected = path.parse(result[0]);
        eStore.set('store-loc', selected.dir);
        eStore.set('store-name', selected.name);

        mainWindow.reload();
    }
};
