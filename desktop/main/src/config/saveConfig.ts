import fs from 'fs';

import { ConfigObj } from '../../../common/Config';
import { GlobalStore } from '../globalStore';

/** TODO
 * saveBackupConfig is literally just saveConfig again
 *   it was definitely needed at some point, figure out why
 *   and actually handle what was causing the parse error
 * */

export function setConfig(config: ConfigObj): void {
    GlobalStore.config = config;
    saveConfig();
}

export function saveConfig(): void {
    if(!GlobalStore.configPath) {
        console.error('configPath not set');
        return;
    }

    const config = getConfigToSave();
    if(!config) return;

    fs.writeFileSync(GlobalStore.configPath, config);

    // Save a backup if the saved config does not parse when read
    try {
        JSON.parse(fs.readFileSync(GlobalStore.configPath, 'utf8'));

        // Backup will not be saved if the above line errors
        saveBackupConfig();
    } catch(e) {
        // do nothing (saved config is valid)
    }
}

export function saveBackupConfig(): void {
    if(!GlobalStore.configBackupPath) {
        console.error('backupConfigPath not set');
        return;
    }

    const config = getConfigToSave();
    if(!config) return;

    fs.writeFileSync(GlobalStore.configBackupPath, config);
}

function getConfigToSave(): string | undefined {
    if(!GlobalStore.config) {
        console.error('Config does not exist');
        return;
    }

    const config = { ...GlobalStore.config };
    delete config.isAdmin;

    return JSON.stringify(config, null, 4);
}
