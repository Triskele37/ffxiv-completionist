import { app, dialog, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { PlayerSave, SaveLoad } from '../../../common/PlayerSave';
import { ConfigStore } from './ConfigStore';

export class PlayerStore {
    static path: string;
    static store: PlayerSave;

    static queuedSave: NodeJS.Timeout;

    //#region------------------------------------------------------- Load/Save
    static get defaultSave() {
        return {
            'overall': {},
            'custom': {},
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'starting-class': '',
            'version': ''
        };
    }

    static load(): SaveLoad {
        if(!ConfigStore.store) return { data: {}, successful: false };

        const base = ConfigStore.store['store-loc'] || app.getPath('userData');
        const file = ConfigStore.store['store-name'] || 'completion';

        PlayerStore.path = path.join(base, file + '.json');
        PlayerStore.store = PlayerStore.defaultSave;

        // Get if it exists
        let save = {} as PlayerSave, successful = true;
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
        catch(e: any) {
            // Retry save if the file was locked
            if(e.code === 'EBUSY') {
                PlayerStore.queuedSave = setTimeout(() => PlayerStore.save(), 1000);
            }
        }
    }

    //#endregion

    //#region------------------------------------------------------- App Methods
    static get(): SaveLoad {
        if(!ConfigStore.store) ConfigStore.load();
        return PlayerStore.load();
    }

    static set(newSave: PlayerSave): void {
        PlayerStore.store = newSave;
        PlayerStore.save();
    }

    //#endregion

    //#region------------------------------------------------------- Backup Utils
    static open() {
        if(ConfigStore.store) shell.openPath(ConfigStore.store['store-loc']);
    }

    static backup(): void {
        if(!ConfigStore.store) return;

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
    }

    static loadBackup(): boolean {
        if(!ConfigStore.store) return false;

        const result = dialog.showOpenDialogSync({
            defaultPath: ConfigStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result?.[0]) {
            PlayerStore.set(JSON.parse(fs.readFileSync(result[0], 'utf8')));

            return true;
        }
		
		return false;
    }

    //#endregion

}
