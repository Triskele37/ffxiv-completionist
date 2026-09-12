import path from 'path';

import { GlobalStore } from '../globalStore';
import { saveConfig } from './saveConfig';

export function updateSaveLocation(result: string) {
    if(!GlobalStore.config) return;

    // Modify the location the app points to
    const selected = path.parse(result);
    GlobalStore.config['store-loc'] = selected.dir;
    GlobalStore.config['store-name'] = selected.name;

    GlobalStore.savePath = path.join(selected.dir, selected.name);
    saveConfig();
}
