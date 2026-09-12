import { dialog } from 'electron';
import path from 'path';

import { GlobalStore } from '../globalStore';
import { updateSaveLocation } from './updateSaveLocation';

/**
 * Set store to target a new save file location
 * @return boolean indicating success
 * */
export function targetNewSave(): boolean {
    if(!GlobalStore.config) return false;

    const result = dialog.showSaveDialogSync({
        defaultPath: path.join(GlobalStore.config['store-loc'], 'completion.json'),
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    // Do stuff only if something was selected
    if(result) updateSaveLocation(result);

    return !!result;
}
