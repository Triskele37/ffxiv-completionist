"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStore = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var ConfigStore_1 = require("./ConfigStore");
var WindowStore_1 = require("./WindowStore");
var PlayerStore = /** @class */ (function () {
    function PlayerStore() {
    }
    Object.defineProperty(PlayerStore, "defaultSave", {
        //#region------------------------------------------------------- Load/Save
        get: function () {
            return {
                'overall': {},
                'custom': {},
                'bookmarked-groups': [],
                'bookmarked-tasks': [],
                'version': ''
            };
        },
        enumerable: false,
        configurable: true
    });
    PlayerStore.load = function () {
        var base = ConfigStore_1.ConfigStore.store['store-loc'] || electron_1.app.getPath('userData');
        var file = (ConfigStore_1.ConfigStore.store['store-name'] || 'completion') + '.json';
        PlayerStore.path = path.join(base, file);
        PlayerStore.store = PlayerStore.defaultSave;
        // Get if it exists
        var save = {};
        if (fs.existsSync(PlayerStore.path)) {
            save = JSON.parse(fs.readFileSync(PlayerStore.path, 'utf8'));
        }
        // Overwrite with defined properties matching default keys
        Object.keys(PlayerStore.store).forEach(function (key) {
            if (save[key] !== undefined)
                PlayerStore.store[key] = save[key];
        });
    };
    PlayerStore.save = function () {
        // In the event a queuedSave exists and another save was called
        // trash the queuedSave so it doesn't overwrite the new store
        if (PlayerStore.queuedSave)
            clearTimeout(PlayerStore.queuedSave);
        try {
            fs.writeFileSync(PlayerStore.path, JSON.stringify(PlayerStore.store, null, 4));
            return true;
        }
        catch (e) {
            if (e.code === 'EBUSY') {
                console.log('----- busy hit');
                PlayerStore.queuedSave = setTimeout(function () { return PlayerStore.save(); }, 1000);
            }
            WindowStore_1.WindowStore.splash.show();
            return false;
        }
    };
    //#endregion
    //#region------------------------------------------------------- App Methods
    PlayerStore.get = function (event) {
        if (!ConfigStore_1.ConfigStore.store)
            ConfigStore_1.ConfigStore.load();
        PlayerStore.load();
        event.returnValue = PlayerStore.store;
    };
    PlayerStore.set = function (event, newSave) {
        PlayerStore.store = newSave;
        event.returnValue = PlayerStore.save();
    };
    //#endregion
    //#region------------------------------------------------------- Backup Utils
    PlayerStore.open = function (event) {
        electron_1.shell.openPath(ConfigStore_1.ConfigStore.store['store-loc']);
        event.returnValue = null;
    };
    PlayerStore.backup = function (event) {
        var fileName = ConfigStore_1.ConfigStore.store['store-name'] + "-" + PlayerStore.store.version + "-backup.json";
        var result = electron_1.dialog.showSaveDialogSync({
            defaultPath: path.join(ConfigStore_1.ConfigStore.store['store-loc'], fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        if (result) {
            fs.writeFileSync(result, JSON.stringify(PlayerStore.store, null, 4));
        }
        event.returnValue = null;
    };
    PlayerStore.loadBackup = function (event) {
        var result = electron_1.dialog.showOpenDialogSync(null, {
            defaultPath: ConfigStore_1.ConfigStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result === null || result === void 0 ? void 0 : result[0]) {
            PlayerStore.set({}, JSON.parse(fs.readFileSync(result[0], 'utf8')));
            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    };
    return PlayerStore;
}());
exports.PlayerStore = PlayerStore;
//# sourceMappingURL=PlayerStore.js.map