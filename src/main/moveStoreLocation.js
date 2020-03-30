import { dialog } from "electron";

import { eStore, getPlayerStore } from "../store/electronStore";

export const moveStoreLocation = (mainWindow) => async (menuItem, browserWindow, event) => {
    const result = await dialog.showOpenDialog(mainWindow, {
        defaultPath: eStore.get('store-loc'),
        properties: ['openDirectory']
    });

    // Do stuff only if something was selected
    if(result && result[0]) {
        // get the current stored completion list before modifying things
        const original = getPlayerStore().get();

        // check if stored completion exists in the new directory
        if(getPlayerStore(result[0]).size !== 0) {
            const title = 'Saved content already exists in this folder';
            const content = 'Please move it and try again';
            dialog.showErrorBox(title, content);
        }
        else {
            eStore.set('store-loc', result[0]);
            getPlayerStore().set(original);
        }
    }
};
