import { app, IpcMainEvent } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { configStore } from './config';

export const playerStore = {
    path: null,
    store: null,
    save: () => {
        fs.writeFileSync(
            playerStore.path,
            JSON.stringify(playerStore.store, null, 4)
        );
    },
    load: () => {
        const base = configStore.store['store-loc'] || app.getPath('userData');
        const file = (configStore.store['store-name'] || 'completion') + '.json';

        playerStore.path = path.join(base, file);

        if(fs.existsSync(playerStore.path)) {
            playerStore.store = JSON.parse(fs.readFileSync(playerStore.path, 'utf8'));
        }
        else {
            playerStore.store = {};
        }
    },
    get: (event: IpcMainEvent) => {
        if(!configStore.store) configStore.load();
        playerStore.load();

        event.returnValue = playerStore.store;
    },
    set: (event: IpcMainEvent, newSave) => {
        playerStore.store = newSave;
        playerStore.save();

        event.returnValue = null;
    }
};
