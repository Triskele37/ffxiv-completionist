import { dialog, IpcMainEvent } from 'electron';
import * as path from 'path';

import { configStore } from '../store/config';
import { playerStore } from '../store/player';

export function newSave(event: IpcMainEvent) {
    const result = dialog.showSaveDialogSync({
        defaultPath: configStore.store['store-loc'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    // Do stuff only if something was selected
    if(result) updateStoreLocation(result);

    event.returnValue = !!result;
}

export function loadSave(event: IpcMainEvent) {
    const result = dialog.showOpenDialogSync(null, {
        defaultPath: configStore.store['store-loc'],
        properties: ['openFile'],
        filters: [{ name: 'JSON', extensions: ['json'] }]
    });

    // Do stuff only if something was selected
    if(result) updateStoreLocation(result[0]);

    event.returnValue = !!result;
}

function updateStoreLocation(result) {
    // Modify the location the app points to
    const selected = path.parse(result);
    configStore.store['store-loc'] = selected.dir;
    configStore.store['store-name'] = selected.name;

    playerStore.path = path.join(selected.dir, selected.name);
    configStore.save();
}
