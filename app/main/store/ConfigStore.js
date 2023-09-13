"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigStore = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var PlayerStore_1 = require("./PlayerStore");
//TODO: util
var isObj = function (v) { return !!v && typeof v === 'object' && !Array.isArray(v); };
var ConfigStore = /** @class */ (function () {
    function ConfigStore() {
    }
    Object.defineProperty(ConfigStore, "defaultConfig", {
        //#region------------------------------------------------------- Load/Save
        get: function () {
            return {
                'store-name': 'completion',
                'store-loc': electron_1.app.getPath('userData'),
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
                    'font-size': 16,
                    'incomplete-rgb': '111, 0, 0',
                    'partial-complete-rgb': '111, 111, 0',
                    'completed-rgb': '0, 111, 0',
                    'excluded-rgb': '111, 111, 111'
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    ConfigStore.load = function () {
        // Determine config file name (protects devs from nuking their config)
        var configName = ConfigStore.isServe ? 'config-dev.json' : 'config.json';
        ConfigStore.path = path.join(electron_1.app.getPath('userData'), configName);
        // Determine valid config backup values
        var backupName = configName.replace('.json', '-last-valid.json');
        ConfigStore.backupPath = path.join(electron_1.app.getPath('userData'), backupName);
        // Default config structure
        ConfigStore.store = ConfigStore.defaultConfig;
        // Get if it exists
        var config = {}, successful = true;
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
            successful: successful
        };
    };
    ConfigStore.overwriteDefault = function (defaultConfig, loadedConfig) {
        Object.keys(defaultConfig).forEach(function (key) {
            // key doesn't exist in saved config
            if (loadedConfig[key] === undefined)
                return;
            if (isObj(defaultConfig[key])) {
                ConfigStore.overwriteDefault(defaultConfig[key], loadedConfig[key]);
            }
            else {
                var overwriteDefault = true;
                // Only overwrite default array config values if loaded config has items
                if (Array.isArray(loadedConfig[key])) {
                    overwriteDefault = loadedConfig[key].length > 0;
                }
                if (overwriteDefault)
                    defaultConfig[key] = loadedConfig[key];
            }
        });
    };
    ConfigStore.save = function () {
        fs.writeFileSync(ConfigStore.path, JSON.stringify(ConfigStore.store, null, 4));
        this.saveBackupIfValid();
    };
    ConfigStore.saveBackupIfValid = function () {
        try {
            JSON.parse(fs.readFileSync(ConfigStore.path, 'utf8'));
            // Backup will not be saved if the above line errors
            this.saveBackup();
        }
        catch (e) {
            // do nothing
        }
    };
    ConfigStore.saveBackup = function () {
        // Ensure admin flag is not stored
        delete ConfigStore.store.isAdmin;
        fs.writeFileSync(ConfigStore.backupPath, JSON.stringify(ConfigStore.store, null, 4));
    };
    //#endregion
    //#region------------------------------------------------------- App Methods
    ConfigStore.get = function (event) {
        event.returnValue = ConfigStore.load();
    };
    ConfigStore.set = function (event, config) {
        ConfigStore.store = config;
        ConfigStore.save();
        event.returnValue = null;
    };
    //#endregion
    //#region------------------------------------------------------- Save Changes
    ConfigStore.newSave = function (event) {
        var result = electron_1.dialog.showSaveDialogSync({
            defaultPath: path.join(ConfigStore.store['store-loc'], 'completion.json'),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result)
            ConfigStore.updateStoreLocation(result);
        event.returnValue = !!result;
    };
    ConfigStore.loadSave = function (event) {
        var result = electron_1.dialog.showOpenDialogSync(null, {
            defaultPath: ConfigStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result)
            ConfigStore.updateStoreLocation(result[0]);
        event.returnValue = !!result;
    };
    ConfigStore.updateStoreLocation = function (result) {
        // Modify the location the app points to
        var selected = path.parse(result);
        ConfigStore.store['store-loc'] = selected.dir;
        ConfigStore.store['store-name'] = selected.name;
        PlayerStore_1.PlayerStore.path = path.join(selected.dir, selected.name);
        ConfigStore.save();
    };
    //#endregion
    //#region------------------------------------------------------- Backup Utils
    ConfigStore.open = function (event) {
        electron_1.shell.openPath(electron_1.app.getPath('userData'));
        event.returnValue = null;
    };
    ConfigStore.backup = function (event) {
        var fileName = "config-" + PlayerStore_1.PlayerStore.store.version + "-backup.json";
        var result = electron_1.dialog.showSaveDialogSync({
            defaultPath: path.join(electron_1.app.getPath('userData'), fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        if (result) {
            fs.writeFileSync(result, JSON.stringify(ConfigStore.store, null, 4));
        }
        event.returnValue = null;
    };
    ConfigStore.loadBackup = function (event) {
        var result = electron_1.dialog.showOpenDialogSync(null, {
            defaultPath: electron_1.app.getPath('userData'),
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result === null || result === void 0 ? void 0 : result[0]) {
            var originalPath = ConfigStore.path;
            ConfigStore.path = result[0];
            var successful = ConfigStore.load().successful;
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
    };
    ConfigStore.store = null;
    return ConfigStore;
}());
exports.ConfigStore = ConfigStore;
//# sourceMappingURL=ConfigStore.js.map