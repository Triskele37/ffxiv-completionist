import { dialog } from "electron";

import { eStore } from "../store/electronStore";

const langOptions = ['English', 'French', 'Cancel'];
const langCodes = ['en', 'fr'];
export const changeLanguage = (mainWindow) => () => {
    const result = dialog.showMessageBox({
        message: 'Please select a language',
        buttons: langOptions,
        defaultId: 4
    });

    // Do stuff only if something was selected
    if(result !== null && result !== undefined && result !== langOptions.length - 1) {
        eStore.set('lang', langCodes[result]);
        mainWindow.reload();
    }
};
