"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStore = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var ConfigStore_1 = require("./ConfigStore");
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
        var file = ConfigStore_1.ConfigStore.store['store-name'] || 'completion';
        PlayerStore.path = path.join(base, file + '.json');
        PlayerStore.store = PlayerStore.defaultSave;
        // Get if it exists
        var save = {}, successful = true;
        if (fs.existsSync(PlayerStore.path)) {
            try {
                save = JSON.parse(fs.readFileSync(PlayerStore.path, 'utf8'));
            }
            catch (e) {
                // Switch the target file to a temp so the original isn't wiped out
                var temp = file + '.temp';
                PlayerStore.path = path.join(base, temp + '.json');
                ConfigStore_1.ConfigStore.store['store-name'] = temp;
                ConfigStore_1.ConfigStore.save();
                successful = false;
            }
        }
        // Overwrite with defined properties matching default keys
        Object.keys(PlayerStore.store).forEach(function (key) {
            if (save[key] !== undefined)
                PlayerStore.store[key] = save[key];
        });
        return { data: PlayerStore.store, successful: successful };
    };
    PlayerStore.save = function () {
        // In the event a queuedSave exists and another save was called
        // trash the queuedSave so it doesn't overwrite the new store
        if (PlayerStore.queuedSave)
            clearTimeout(PlayerStore.queuedSave);
        try {
            fs.writeFileSync(PlayerStore.path, JSON.stringify(PlayerStore.store, null, 4));
        }
        catch (e) {
            // Retry save if the file was locked
            if (e.code === 'EBUSY') {
                PlayerStore.queuedSave = setTimeout(function () { return PlayerStore.save(); }, 1000);
            }
        }
    };
    //#endregion
    //#region------------------------------------------------------- App Methods
    PlayerStore.get = function (event) {
        if (!ConfigStore_1.ConfigStore.store)
            ConfigStore_1.ConfigStore.load();
        event.returnValue = PlayerStore.load();
    };
    PlayerStore.set = function (event, newSave) {
        PlayerStore.store = newSave;
        PlayerStore.save();
        event.returnValue = null;
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