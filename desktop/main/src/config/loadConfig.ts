import { app } from 'electron';
import fs from 'fs';
import path from 'path';

import { ConfigLoad, ConfigObj } from '../../../common/Config';
import { GlobalStore } from '../globalStore';
import { getDefaultConfig } from './getDefaultConfig';
import { overwriteDefault } from './overwriteDefault';
import { saveBackupConfig } from './saveConfig';

export function loadConfig(): ConfigLoad {
    // Determine config file name (protects devs from nuking their config)
    const configName = GlobalStore.isServe ? 'config-dev.json' : 'config.json';
    GlobalStore.configPath = path.join(app.getPath('userData'), configName);

    // Determine valid config backup values
    const backupName = configName.replace('.json', '-last-valid.json');
    GlobalStore.configBackupPath = path.join(app.getPath('userData'), backupName);

    // Default config structure
    GlobalStore.config = getDefaultConfig();

    // Get if it exists
    let config = {} as ConfigObj, successful = true;
    if(fs.existsSync(GlobalStore.configPath)) {
        try {
            config = JSON.parse(fs.readFileSync(GlobalStore.configPath, 'utf8'));
        }
        catch(e) {
            // Config is corrupted
            successful = false;
            config = JSON.parse(fs.readFileSync(GlobalStore.configBackupPath, 'utf8'));
        }
    }

    // Overwrite with defined properties matching default keys
    overwriteDefault(GlobalStore.config, config);

    // Make a "last valid config" backup
    if(successful) saveBackupConfig();

    // Attach admin flag
    GlobalStore.config.isAdmin = GlobalStore.isServe;

    return {
        data: GlobalStore.config,
        successful
    };
}
