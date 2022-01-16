import { ipcMain } from 'electron';
import * as fs from 'fs';

import { paths, store } from '../store';

export function onSetSave() {
    ipcMain.on('set-save', (event, newSave) => {
        store.save = newSave;
        saveSave();

        event.returnValue = null;
    });
}

function saveSave() {
    fs.writeFileSync(paths.save, JSON.stringify(store.save, null, 4));
}
