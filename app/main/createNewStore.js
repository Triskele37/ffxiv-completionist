import path from 'path';
import { dialog } from "electron";

import { eStore } from "../store/electronStore";

export const createNewStore = (mainWindow) => () => {
    const result = dialog.showSaveDialog({
        defaultPath: eStore.get('store-loc'),
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    // Do stuff only if something was selected
    if(result) {
        // Modify the location the app points to
        const selected = path.parse(result);
        eStore.set('store-loc', selected.dir);
        eStore.set('store-name', selected.name);

        mainWindow.reload();
    }
};
