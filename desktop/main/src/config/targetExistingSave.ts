import { dialog } from 'electron';

import { GlobalStore } from '../globalStore';
import { updateSaveLocation } from './updateSaveLocation';

export function targetExistingSave(): boolean {
    if(!GlobalStore.config) return false;

    const result = dialog.showOpenDialogSync({
        defaultPath: GlobalStore.config['store-loc'],
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    // Do stuff only if something was selected
    if(result) updateSaveLocation(result[0]);

    return !!result;
}
