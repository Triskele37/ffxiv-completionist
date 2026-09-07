import { dialog } from 'electron';
import fs from 'fs';

import { GlobalStore } from '../globalStore';
import { setSave } from './setSave';

export function loadBackupSave(): boolean {
    if(!GlobalStore.config) return false;

    const result = dialog.showOpenDialogSync({
        defaultPath: GlobalStore.config['store-loc'],
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    // Do stuff only if something was selected
    if(result?.[0]) {
        setSave(JSON.parse(fs.readFileSync(result[0], 'utf8')));

        return true;
    }

    return false;
}
