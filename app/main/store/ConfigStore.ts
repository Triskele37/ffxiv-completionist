import { app, dialog, IpcMainEvent, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { PlayerStore } from './PlayerStore';

//TODO: util
const isObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);

export class ConfigStore {
    static path = path.join(app.getPath('userData'), 'config.json');
    static store = null;

    //#region------------------------------------------------------- Load/Save
    static get defaultConfig() {
        return {
            'store-name': 'completion',
            'store-loc': app.getPath('userData'),
            'lang': 'en',
            'starting-class': '',
            'last-breadcrumbs': ['main-menu'],
            'chaining-enabled': false,
            'chain-history-limit': 10,
            'chain-min-threshold': 10,
            'table-filters': {
                completed: true,
                incomplete: true,
                excluded: true
            },
            'window': {
                x: 100,
                y: 100,
                width: 800,
                height: 600,
                max: false
            },
            'theme': {
                'primary-color': '#0f4c75',
                'primary-text': '#121212',
                'text-color': '255, 255, 255',
                'font-family': 'sans-serif',
                'bg-h': 0,
                'bg-s': 0,
                'bg-l': 12
            }
        };
    }

    static load(): void {
        // Default config structure
        ConfigStore.store = ConfigStore.defaultConfig;

        // Get if it exists
        let config = {};
        if(fs.existsSync(ConfigStore.path)) {
            config = JSON.parse(fs.readFileSync(ConfigStore.path, 'utf8'));
        }

        // Overwrite with defined properties matching default keys
        ConfigStore.overwriteDefault(ConfigStore.store, config);
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
    }

    //#endregion

    //#region------------------------------------------------------- App Methods
    static get(event: IpcMainEvent): void {
        ConfigStore.load();
        event.returnValue = ConfigStore.store;
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
            ConfigStore.load();
            ConfigStore.path = originalPath;
            ConfigStore.save();

            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    }

    //#endregion

}
