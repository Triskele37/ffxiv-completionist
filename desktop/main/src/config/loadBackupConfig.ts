import { app, dialog } from 'electron';

import { GlobalStore } from '../globalStore';
import { loadConfig } from './loadConfig';
import { saveConfig } from './saveConfig';

export function loadBackupConfig(): boolean {
    const result = dialog.showOpenDialogSync({
        defaultPath: app.getPath('userData'),
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    // Do stuff only if something was selected
    if(result?.[0]) {
        const originalPath = GlobalStore.configPath;
        GlobalStore.configPath = result[0];
        const { successful } = loadConfig();
        GlobalStore.configPath = originalPath;

        if(successful) {
            saveConfig();
            return true;
        }
    }

    return false;
}
