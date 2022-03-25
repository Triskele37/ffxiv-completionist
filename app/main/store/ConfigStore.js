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
                    'background': '0, 0, 12',
                    'text-color-rgb': '255, 255, 255',
                    'font-family': 'sans-serif',
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
        // Default config structure
        ConfigStore.store = ConfigStore.defaultConfig;
        // Get if it exists
        var config = {};
        if (fs.existsSync(ConfigStore.path)) {
            config = JSON.parse(fs.readFileSync(ConfigStore.path, 'utf8'));
        }
        // Overwrite with defined properties matching default keys
        ConfigStore.overwriteDefault(ConfigStore.store, config);
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
    };
    //#endregion
    //#region------------------------------------------------------- App Methods
    ConfigStore.get = function (event) {
        ConfigStore.load();
        event.returnValue = ConfigStore.store;
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
            ConfigStore.load();
            ConfigStore.path = originalPath;
            ConfigStore.save();
            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    };
    ConfigStore.path = path.join(electron_1.app.getPath('userData'), 'config.json');
    ConfigStore.store = null;
    return ConfigStore;
}());
exports.ConfigStore = ConfigStore;
//# sourceMappingURL=ConfigStore.js.map