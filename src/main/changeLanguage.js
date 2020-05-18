import { dialog } from "electron";

import { eStore } from "../store/electronStore";

export const changeLanguage = (mainWindow) => () => {
    const result = dialog.showMessageBox({
        message: 'Please select a language',
        buttons: ['Japanese', 'English', 'Deutsch', 'French', 'Cancel'],
        defaultId: 4
    });

    // Do stuff only if something was selected
    if(result !== null && result !== undefined && result !== 4) {
        eStore.set('lang', ['ja', 'en', 'de', 'fr'][result]);
        mainWindow.reload();
    }
};
