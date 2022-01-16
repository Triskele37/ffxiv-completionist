import { dialog } from 'electron';

import { store, saveConfig } from './store';

const langOptions = ['English', 'French', 'Cancel'];
const langCodes = ['en', 'fr'];
export const changeLanguage = (mainWindow) => () => {
    const result = dialog.showMessageBoxSync({
        message: 'Please select a language',
        buttons: langOptions,
        defaultId: 4
    });

    // Do stuff only if something was selected
    if(result !== null && result !== undefined && result !== langOptions.length - 1) {
        store.config['lang'] = langCodes[result];
        saveConfig();

        mainWindow.reload();
    }
};
