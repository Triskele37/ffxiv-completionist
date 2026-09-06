import { app, dialog, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { ConfigLoad, ConfigObj } from '../../../common/Config';
import { PlayerStore } from './PlayerStore';

//TODO: util
const isObj = (v: any) => !!v && typeof v === 'object' && !Array.isArray(v);

export class ConfigStore {
    static path: string;
    static backupPath: string;
    static isServe: boolean;
    static store: ConfigObj | null = null;

    //#region------------------------------------------------------- Load/Save
    static get defaultConfig(): ConfigObj {
        return {
            'store-name': 'completion',
            'store-loc': app.getPath('userData'),
            'lang': 'en',
            'use-short-names': true,
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
                'font-size': 16,
                'incomplete-rgb': '111, 0, 0',
                'partial-complete-rgb': '111, 111, 0',
                'completed-rgb': '0, 111, 0',
                'excluded-rgb': '111, 111, 111'
            }
        };
    }

    static load(): ConfigLoad {
        // Determine config file name (protects devs from nuking their config)
        const configName = ConfigStore.isServe ? 'config-dev.json' : 'config.json';
        ConfigStore.path = path.join(app.getPath('userData'), configName);

        // Determine valid config backup values
        const backupName = configName.replace('.json', '-last-valid.json');
        ConfigStore.backupPath = path.join(app.getPath('userData'), backupName);

        // Default config structure
        ConfigStore.store = ConfigStore.defaultConfig;

        // Get if it exists
        let config = {} as ConfigObj, successful = true;
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

        // Attach admin flag
        ConfigStore.store.isAdmin = ConfigStore.isServe;

        return {
            data: ConfigStore.store,
            successful
        };
    }

    private static overwriteDefault(
        defaultConfig: ConfigObj | any,
        loadedConfig: ConfigObj | any,
    ): void {
        if(!defaultConfig || !loadedConfig) return;

        for(let key of Object.keys(defaultConfig) as (keyof ConfigObj)[]) {
            // key doesn't exist in saved config
            if(loadedConfig[key] === undefined) return;

            if(isObj(defaultConfig[key])) {
                ConfigStore.overwriteDefault(defaultConfig[key], loadedConfig[key]);
            }
            else {
                let overwriteDefault = true;

                // Only overwrite default array config values if loaded config has items
                if(Array.isArray(loadedConfig[key])) {
                    overwriteDefault = (loadedConfig[key] as any[]).length > 0;
                }

                if(overwriteDefault) defaultConfig[key] = loadedConfig[key];
            }
        }
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
        if(!ConfigStore.store) return;

        // Ensure admin flag is not stored
        delete ConfigStore.store.isAdmin;

        fs.writeFileSync(
            ConfigStore.backupPath,
            JSON.stringify(ConfigStore.store, null, 4)
        );
    }

    //#endregion

    //#region------------------------------------------------------- App Methods
    static get(): ConfigLoad {
        return ConfigStore.load();
    }

    static set(config: ConfigObj): void {
        ConfigStore.store = config;
        ConfigStore.save();
    }

    //#endregion

    //#region------------------------------------------------------- Save Changes
    static newSave(): boolean {
        if(!ConfigStore.store) return false;

        const result = dialog.showSaveDialogSync({
            defaultPath: path.join(ConfigStore.store['store-loc'], 'completion.json'),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result) ConfigStore.updateStoreLocation(result);

        return !!result;
    }

    static loadSave(): boolean {
        if(!ConfigStore.store) return false;

        const result = dialog.showOpenDialogSync({
            defaultPath: ConfigStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });

        // Do stuff only if something was selected
        if(result) ConfigStore.updateStoreLocation(result[0]);

        return !!result;
    }

    private static updateStoreLocation(result: string) {
        if(!ConfigStore.store) return;

        // Modify the location the app points to
        const selected = path.parse(result);
        ConfigStore.store['store-loc'] = selected.dir;
        ConfigStore.store['store-name'] = selected.name;

        PlayerStore.path = path.join(selected.dir, selected.name);
        ConfigStore.save();
    }

    //#endregion

    //#region------------------------------------------------------- Backup Utils
    static open(): void {
        shell.openPath(app.getPath('userData'));
    }

    static backup(): void {
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
    }

    static loadBackup(): boolean {
        const result = dialog.showOpenDialogSync({
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
                return true;
            }
        }
		
		return false;
    }

    //#endregion

}
