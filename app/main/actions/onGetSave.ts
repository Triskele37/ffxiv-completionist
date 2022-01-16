import { app, ipcMain } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { paths, store } from '../store';

export function onGetSave() {
    ipcMain.on('get-save', (event) => {
        event.returnValue = store.save;
    });
}

export function initializePlayerStore() {
    const base = store.config['store-loc'] || app.getPath('userData');
    const file = (store.config['store-name'] || 'completion') + '.json';

    paths.save = path.join(base, file);
    store.save = JSON.parse(fs.readFileSync(paths.save, 'utf8'));
}
