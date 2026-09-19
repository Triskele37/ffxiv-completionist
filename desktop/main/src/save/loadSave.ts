import { app } from 'electron';
import fs from 'fs';
import path from 'path';

import { PlayerSave, SaveLoad } from '../../../common/PlayerSave';
import { GlobalStore } from '../globalStore';
import { saveConfig } from '../config';
import { getDefaultSave } from './getDefaultSave';

export function loadSave(): SaveLoad {
    if(!GlobalStore.config) {
        console.error('Attempted to load save with uninitialized config');
        return { data: {} as PlayerSave, successful: false };
    }

    const base = GlobalStore.config['store-loc'] || app.getPath('userData');
    const file = GlobalStore.config['store-name'] || 'completion';

    GlobalStore.savePath = path.join(base, file + '.json');
    GlobalStore.save = getDefaultSave();

    let save = {} as PlayerSave;
    let successful = true;

    // Get if it exists
    if(fs.existsSync(GlobalStore.savePath)) {
        try {
            save = JSON.parse(fs.readFileSync(GlobalStore.savePath, 'utf8'));
        }
        catch(e) {
            // Switch the target file to a temp so the original isn't wiped out
            const temp = file + '.temp';
            GlobalStore.savePath = path.join(base, temp + '.json');

            GlobalStore.config['store-name'] = temp;
            saveConfig();

            successful = false;
        }
    }

    // Overwrite with defined properties matching default keys
    for(const k in GlobalStore.save) {
        const key = k as keyof PlayerSave;

        if(save[key] !== undefined) {
            GlobalStore.save[key] = save[key] as never;
        }
    }

    return { data: GlobalStore.save, successful };
}
