import { app, dialog } from 'electron';
import fs from 'fs';
import path from 'path';

import { GlobalStore } from '../globalStore';

/**
 * Create a user generated backup config
 * */
export function createBackupConfig(): void {
    const fileName = [
        'config',
        GlobalStore.save?.version,
        'backup'
    ].filter(Boolean).join('-');

    const result = dialog.showSaveDialogSync({
        defaultPath: path.join(app.getPath('userData'), fileName + '.json'),
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    if(result) {
        fs.writeFileSync(
            result,
            JSON.stringify(GlobalStore.config, null, 4)
        );
    }
}
