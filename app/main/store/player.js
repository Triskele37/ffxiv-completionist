"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerStore = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var config_1 = require("./config");
exports.playerStore = {
    path: null,
    store: null,
    save: function () {
        fs.writeFileSync(exports.playerStore.path, JSON.stringify(exports.playerStore.store, null, 4));
    },
    load: function () {
        var base = config_1.configStore.store['store-loc'] || electron_1.app.getPath('userData');
        var file = (config_1.configStore.store['store-name'] || 'completion') + '.json';
        exports.playerStore.path = path.join(base, file);
        exports.playerStore.store = {
            'overall': {},
            'custom': {},
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'version': ''
        };
        // Get if it exists
        var save = {};
        if (fs.existsSync(exports.playerStore.path)) {
            save = JSON.parse(fs.readFileSync(exports.playerStore.path, 'utf8'));
        }
        // Overwrite with defined properties matching default keys
        Object.keys(exports.playerStore.store).forEach(function (key) {
            if (save[key] !== undefined)
                exports.playerStore.store[key] = save[key];
        });
    },
    get: function (event) {
        if (!config_1.configStore.store)
            config_1.configStore.load();
        exports.playerStore.load();
        event.returnValue = exports.playerStore.store;
    },
    set: function (event, newSave) {
        exports.playerStore.store = newSave;
        exports.playerStore.save();
        event.returnValue = null;
    },
    open: function (event) {
        electron_1.shell.openPath(config_1.configStore.store['store-loc']);
        event.returnValue = null;
    },
    backup: function (event) {
        var fileName = config_1.configStore.store['store-name'] + "-" + exports.playerStore.store.version + "-backup.json";
        var result = electron_1.dialog.showSaveDialogSync({
            defaultPath: path.join(config_1.configStore.store['store-loc'], fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        if (result) {
            fs.writeFileSync(result, JSON.stringify(exports.playerStore.store, null, 4));
        }
        event.returnValue = null;
    },
    loadBackup: function (event) {
        var result = electron_1.dialog.showOpenDialogSync(null, {
            defaultPath: config_1.configStore.store['store-loc'],
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result === null || result === void 0 ? void 0 : result[0]) {
            exports.playerStore.set({}, JSON.parse(fs.readFileSync(result[0], 'utf8')));
            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    }
};
//# sourceMappingURL=player.js.map