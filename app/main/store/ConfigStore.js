"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigStore = void 0;
const electron_1 = require("electron");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const PlayerStore_1 = require("./PlayerStore");
//TODO: util
const isObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
class ConfigStore {
    static path;
    static backupPath;
    static isServe;
    static store = null;
    //#region------------------------------------------------------- Load/Save
    static get defaultConfig() {
        return {
            'store-name': 'completion',
            'store-loc': electron_1.app.getPath('userData'),
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
    static load() {
        // Determine config file name (protects devs from nuking their config)
        const configName = ConfigStore.isServe ? 'config-dev.json' : 'config.json';
        ConfigStore.path = path.join(electron_1.app.getPath('userData'), configName);
        // Determine valid config backup values
        const backupName = configName.replace('.json', '-last-valid.json');
        ConfigStore.backupPath = path.join(electron_1.app.getPath('userData'), backupName);
        // Default config structure
        ConfigStore.store = ConfigStore.defaultConfig;
        // Get if it exists
        let config = {}, successful = true;
        if (fs.existsSync(ConfigStore.path)) {
            try {
                config = JSON.parse(fs.readFileSync(ConfigStore.path, 'utf8'));
            }
            catch (e) {
                // Config is corrupted
                successful = false;
                config = JSON.parse(fs.readFileSync(ConfigStore.backupPath, 'utf8'));
            }
        }
        // Overwrite with defined properties matching default keys
        ConfigStore.overwriteDefault(ConfigStore.store, config);
        // Make a "last valid config" backup
        if (successful)
            this.saveBackup();
        // Attach admin flag
        ConfigStore.store.isAdmin = ConfigStore.isServe;
        return {
            data: ConfigStore.store,
            successful
        };
    }
    static overwriteDefault(defaultConfig, loadedConfig) {
        if (!defaultConfig || !loadedConfig)
            return;
        for (let key of Object.keys(defaultConfig)) {
            // key doesn't exist in saved config
            if (loadedConfig[key] === undefined)
                return;
            if (isObj(defaultConfig[key])) {
                ConfigStore.overwriteDefault(defaultConfig[key], loadedConfig[key]);
            }
            else {
                let overwriteDefault = true;
                // Only overwrite default array config values if loaded config has items
                if (Array.isArray(loadedConfig[key])) {
                    overwriteDefault = loadedConfig[key].length > 0;
                }
                if (overwriteDefault)
                    defaultConfig[key] = loadedConfig[key];
            }
        }
    }
    static save() {
        fs.writeFileSync(ConfigStore.path, JSON.stringify(ConfigStore.store, null, 4));
        this.saveBackupIfValid();
    }
    static saveBackupIfValid() {
        try {
            JSON.parse(fs.readFileSync(ConfigStore.path, 'utf8'));
            // Backup will not be saved if the above line errors
            this.saveBackup();
        }
        catch (e) {
            // do nothing
        }
    }
    static saveBackup() {
        if (!ConfigStore.store)
            return;
        // Ensure admin flag is not stored
        delete ConfigStore.store.isAdmin;
        fs.writeFileSync(ConfigStore.backupPath, JSON.stringify(ConfigStore.store, null, 4));
    }
    //#endregion
    //#region------------------------------------------------------- App Methods
    static get(event) {
        event.returnValue = ConfigStore.load();
    }
    static set(event, config) {
        ConfigStore.store = config;
        ConfigStore.save();
        event.returnValue = null;
    }
    //#endregion
    //#region------------------------------------------------------- Save Changes
    static newSave(event) {
        if (!ConfigStore.store)
            return;
        const result = electron_1.dialog.showSaveDialogSync({
            defaultPath: path.join(ConfigStore.store['store-loc'], 'completion.json'),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result)
            ConfigStore.updateStoreLocation(result);
        event.returnValue = !!result;
    }
    static loadSave(event) {
        if (!ConfigStore.store)
            return;
        const result = electron_1.dialog.showOpenDialogSync({
            defaultPath: ConfigStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result)
            ConfigStore.updateStoreLocation(result[0]);
        event.returnValue = !!result;
    }
    static updateStoreLocation(result) {
        if (!ConfigStore.store)
            return;
        // Modify the location the app points to
        const selected = path.parse(result);
        ConfigStore.store['store-loc'] = selected.dir;
        ConfigStore.store['store-name'] = selected.name;
        PlayerStore_1.PlayerStore.path = path.join(selected.dir, selected.name);
        ConfigStore.save();
    }
    //#endregion
    //#region------------------------------------------------------- Backup Utils
    static open(event) {
        electron_1.shell.openPath(electron_1.app.getPath('userData'));
        event.returnValue = null;
    }
    static backup(event) {
        const fileName = `config-${PlayerStore_1.PlayerStore.store.version}-backup.json`;
        const result = electron_1.dialog.showSaveDialogSync({
            defaultPath: path.join(electron_1.app.getPath('userData'), fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        if (result) {
            fs.writeFileSync(result, JSON.stringify(ConfigStore.store, null, 4));
        }
        event.returnValue = null;
    }
    static loadBackup(event) {
        const result = electron_1.dialog.showOpenDialogSync({
            defaultPath: electron_1.app.getPath('userData'),
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result?.[0]) {
            const originalPath = ConfigStore.path;
            ConfigStore.path = result[0];
            const { successful } = ConfigStore.load();
            ConfigStore.path = originalPath;
            if (successful) {
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
}
exports.ConfigStore = ConfigStore;
//# sourceMappingURL=ConfigStore.js.map