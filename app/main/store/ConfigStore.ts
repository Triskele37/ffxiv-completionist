import { app, dialog, IpcMainEvent, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { PlayerStore } from './PlayerStore';

//TODO: util
const isObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);

export class ConfigStore {
    static path: string;
    static backupPath: string;
    static isServe: boolean;
    static store = null;

    //#region------------------------------------------------------- Load/Save
    static get defaultConfig() {
        return {
            'store-name': 'completion',
            'store-loc': app.getPath('userData'),
            'lang': 'en',
            'starting-class': '',
            'last-breadcrumbs': ['main-menu'],
            'chaining-enabled': true,
            'chain-history-limit': 10,
            'chain-min-threshold': 10,
            'table-filters': {
                completed: true,
                incomplete: true,
                excluded: true
            },
            'show-completed-groups': true,
            'show-empty-groups': true,
            'window': {
                x: 100,
                y: 100,
                width: 1100,
                height: 750,
                max: false
            },
            'theme': {
                'primary-color': '#456c37',
                'primary-text': '#121212',
                'background': '0, 0, 12',
                'text-color-rgb': '255, 255, 255',
                'font-family': 'sans-serif',
                'incomplete-rgb': '111, 0, 0',
                'partial-complete-rgb': '111, 111, 0',
                'completed-rgb': '0, 111, 0',
                'excluded-rgb': '111, 111, 111'
            }
        };
    }

    static load(): { data: any, successful: boolean } {
        // Determine config file name (protects devs from nuking their config)
        const configName = ConfigStore.isServe ? 'config-dev.json' : 'config.json';
        ConfigStore.path = path.join(app.getPath('userData'), configName);

        // Determine valid config backup values
        const backupName = configName.replace('.json', '-last-valid.json');
        ConfigStore.backupPath = path.join(app.getPath('userData'), backupName);

        // Default config structure
        ConfigStore.store = ConfigStore.defaultConfig;

        // Get if it exists
        let config = {}, successful = true;
        if(fs.existsSync(ConfigStore.path)) {
            try {
                config = JSON.parse(fs.readFileSync(ConfigStore.path, 'utf8'));
            }
            catch(e) {
                // Config is corrupted
                successful = false;
                config = JSON.parse(fs.readFileSync(ConfigStore.backupPath, 'utf8'));
            }
        }

        // Overwrite with defined properties matching default keys
        ConfigStore.overwriteDefault(ConfigStore.store, config);

        // Make a "last valid config" backup
        if(successful) this.saveBackup();

        return {
            data: ConfigStore.store,
            successful
        };
    }

    private static overwriteDefault(defaultConfig, loadedConfig): void {
        Object.keys(defaultConfig).forEach((key) => {
            // key doesn't exist in saved config
            if(loadedConfig[key] === undefined) return;

            if(isObj(defaultConfig[key])) {
                ConfigStore.overwriteDefault(defaultConfig[key], loadedConfig[key]);
            }
            else {
                let overwriteDefault = true;

                // Only overwrite default array config values if loaded config has items
                if(Array.isArray(loadedConfig[key])) {
                    overwriteDefault = loadedConfig[key].length > 0;
                }

                if(overwriteDefault) defaultConfig[key] = loadedConfig[key];
            }
        });
    }

    static save(): void {
        fs.writeFileSync(
            ConfigStore.path,
            JSON.stringify(ConfigStore.store, null, 4)
        );

        this.saveBackupIfValid();
    }

    static saveBackupIfValid(): void {
        try {
            JSON.parse(fs.readFileSync(ConfigStore.path, 'utf8'));

            // Backup will not be saved if the above line errors
            this.saveBackup();
        }
        catch(e) {
            // do nothing
        }
    }

    static saveBackup(): void {
        fs.writeFileSync(
            ConfigStore.backupPath,
            JSON.stringify(ConfigStore.store, null, 4)
        );
    }

    //#endregion

    //#region------------------------------------------------------- App Methods
    static get(event: IpcMainEvent): void {
        event.returnValue = ConfigStore.load();
    }

    static set(event, config): void {
        ConfigStore.store = config;
        ConfigStore.save();

        event.returnValue = null;
    }

    //#endregion

    //#region------------------------------------------------------- Save Changes
    static newSave(event: IpcMainEvent): void {
        const result = dialog.showSaveDialogSync({
            defaultPath: path.join(ConfigStore.store['store-loc'], 'completion.json'),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result) ConfigStore.updateStoreLocation(result);

        event.returnValue = !!result;
    }

    static loadSave(event: IpcMainEvent) {
        const result = dialog.showOpenDialogSync(null, {
            defaultPath: ConfigStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result) ConfigStore.updateStoreLocation(result[0]);

        event.returnValue = !!result;
    }

    private static updateStoreLocation(result) {
        // Modify the location the app points to
        const selected = path.parse(result);
        ConfigStore.store['store-loc'] = selected.dir;
        ConfigStore.store['store-name'] = selected.name;

        PlayerStore.path = path.join(selected.dir, selected.name);
        ConfigStore.save();
    }

    //#endregion

    //#region------------------------------------------------------- Backup Utils
    static open(event: IpcMainEvent): void {
        shell.openPath(app.getPath('userData'));
        event.returnValue = null;
    }

    static backup(event: IpcMainEvent): void {
        const fileName = `config-${PlayerStore.store.version}-backup.json`;
        const result = dialog.showSaveDialogSync({
            defaultPath: path.join(app.getPath('userData'), fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        if(result) {
            fs.writeFileSync(
                result,
                JSON.stringify(ConfigStore.store, null, 4)
            );
        }

        event.returnValue = null;
    }

    static loadBackup(event: IpcMainEvent): void {
        const result = dialog.showOpenDialogSync(null, {
            defaultPath: app.getPath('userData'),
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result?.[0]) {
            const originalPath = ConfigStore.path;
            ConfigStore.path = result[0];
            const { successful } = ConfigStore.load();
            ConfigStore.path = originalPath;

            if(successful) {
                ConfigStore.save();
                event.returnValue = true;
            }
            else {
                event.returnValue = false;
            }
        }
        else {
            event.returnValue = false;
        }
    }

    //#endregion

}
