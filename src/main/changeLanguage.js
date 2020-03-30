import { dialog } from "electron";

import { eStore } from "../store/electronStore";

export const changeLanguage = (mainWindow) => () => {
    const result = dialog.showMessageBox({
        message: 'Please select a language',
        buttons: ['J', 'E', 'D', 'F']
    });

    // Do stuff only if something was selected
    if(result !== null && result !== undefined) {
        eStore.set('lang', ['ja', 'en', 'de', 'fr'][result]);
        mainWindow.reload();
    }
};
