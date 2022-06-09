import { app, dialog, IpcMainEvent, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { ConfigStore } from './ConfigStore';
import { WindowStore } from './WindowStore';

export class PlayerStore {
    static path: string;
    static store;

    static queuedSave;

    //#region------------------------------------------------------- Load/Save
    static get defaultSave() {
        return {
            'overall': {},
            'custom': {},
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'version': ''
        };
    }

    static load(): { data: any, successful: boolean } {
        const base = ConfigStore.store['store-loc'] || app.getPath('userData');
        const file = ConfigStore.store['store-name'] || 'completion';

        PlayerStore.path = path.join(base, file + '.json');
        PlayerStore.store = PlayerStore.defaultSave;

        // Get if it exists
        let save = {}, successful = true;
        if(fs.existsSync(PlayerStore.path)) {
            try {
                save = JSON.parse(fs.readFileSync(PlayerStore.path, 'utf8'));
            }
            catch(e) {
                // Switch the target file to a temp so the original isn't wiped out
                const temp = file + '.temp';
                PlayerStore.path = path.join(base, temp + '.json');

                ConfigStore.store['store-name'] = temp;
                ConfigStore.save();

                successful = false;
            }
        }

        // Overwrite with defined properties matching default keys
        Object.keys(PlayerStore.store).forEach((key) => {
            if(save[key] !== undefined) PlayerStore.store[key] = save[key];
        });

        return { data: PlayerStore.store, successful };
    }

    static save(): void {
        // In the event a queuedSave exists and another save was called
        // trash the queuedSave so it doesn't overwrite the new store
        if(PlayerStore.queuedSave) clearTimeout(PlayerStore.queuedSave);

        try {
            fs.writeFileSync(
                PlayerStore.path,
                JSON.stringify(PlayerStore.store, null, 4)
            );
        }
        catch(e) {
            // Retry save if the file was locked
            if(e.code === 'EBUSY') {
                PlayerStore.queuedSave = setTimeout(() => PlayerStore.save(), 1000);
            }
        }
    }

    //#endregion

    //#region------------------------------------------------------- App Methods
    static get(event: IpcMainEvent) {
        if(!ConfigStore.store) ConfigStore.load();
        event.returnValue = PlayerStore.load();
    }

    static set(event: IpcMainEvent, newSave) {
        PlayerStore.store = newSave;
        PlayerStore.save();
        event.returnValue = null;
    }

    //#endregion

    //#region------------------------------------------------------- Backup Utils
    static open(event: IpcMainEvent) {
        shell.openPath(ConfigStore.store['store-loc']);
        event.returnValue = null;
    }

    static backup(event: IpcMainEvent) {
        const fileName = `${ConfigStore.store['store-name']}-${PlayerStore.store.version}-backup.json`;
        const result = dialog.showSaveDialogSync({
            defaultPath: path.join(ConfigStore.store['store-loc'], fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        if(result) {
            fs.writeFileSync(
                result,
                JSON.stringify(PlayerStore.store, null, 4)
            );
        }

        event.returnValue = null;
    }

    static loadBackup(event: IpcMainEvent) {
        const result = dialog.showOpenDialogSync(null, {
            defaultPath: ConfigStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result?.[0]) {
            PlayerStore.set({} as any,
                JSON.parse(fs.readFileSync(result[0], 'utf8'))
            );

            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    }

    //#endregion

}
