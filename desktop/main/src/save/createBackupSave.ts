import { dialog } from 'electron';
import fs from 'fs';
import path from 'path';

import { GlobalStore } from '../globalStore';

export function createBackupSave(): void {
    if(!GlobalStore.config) return;

    const fileName = [
        GlobalStore.config['store-name'],
        GlobalStore.save?.version,
        'backup'
    ].filter(Boolean).join('-');

    const result = dialog.showSaveDialogSync({
        defaultPath: path.join(GlobalStore.config['store-loc'], fileName + '.json'),
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    if(result) {
        fs.writeFileSync(
            result,
            JSON.stringify(GlobalStore.save, null, 4)
        );
    }
}
