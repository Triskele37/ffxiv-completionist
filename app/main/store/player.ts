import { app, dialog, IpcMainEvent, shell } from 'electron';
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
        playerStore.store = {
            'overall': {},
            'custom': {},
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'version': ''
        };

        // Get if it exists
        let save = {};
        if(fs.existsSync(playerStore.path)) {
            save = JSON.parse(fs.readFileSync(playerStore.path, 'utf8'));
        }

        // Overwrite with defined properties matching default keys
        Object.keys(playerStore.store).forEach((key) => {
            if(save[key] !== undefined) playerStore.store[key] = save[key];
        });
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
    },
    open: (event: IpcMainEvent) => {
        shell.openPath(configStore.store['store-loc']);
        event.returnValue = null;
    },
    backup: (event: IpcMainEvent) => {
        const fileName = `${configStore.store['store-name']}-${playerStore.store.version}-backup.json`;
        const result = dialog.showSaveDialogSync({
            defaultPath: path.join(configStore.store['store-loc'], fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        if(result) {
            fs.writeFileSync(
                result,
                JSON.stringify(playerStore.store, null, 4)
            );
        }

        event.returnValue = null;
    },
    loadBackup: (event: IpcMainEvent) => {
        const result = dialog.showOpenDialogSync(null, {
            defaultPath: configStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result?.[0]) {
            playerStore.set({} as any,
                JSON.parse(fs.readFileSync(result[0], 'utf8'))
            );

            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    }
};
