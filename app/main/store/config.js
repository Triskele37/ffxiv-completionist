"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configStore = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var player_1 = require("./player");
exports.configStore = {
    path: path.join(electron_1.app.getPath('userData'), 'config.json'),
    store: null,
    save: function () {
        fs.writeFileSync(exports.configStore.path, JSON.stringify(exports.configStore.store, null, 4));
    },
    load: function () {
        // Default config structure
        exports.configStore.store = {
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
                'font-family': 'sans-serif'
            }
        };
        // Get if it exists
        var config = {};
        if (fs.existsSync(exports.configStore.path)) {
            config = JSON.parse(fs.readFileSync(exports.configStore.path, 'utf8'));
        }
        // Overwrite with defined properties matching default keys
        Object.keys(exports.configStore.store).forEach(function (key) {
            if (config[key] === undefined)
                return;
            var overwriteDefault = true;
            if (Array.isArray(config[key])) {
                overwriteDefault = config[key].length > 0;
            }
            if (overwriteDefault)
                exports.configStore.store[key] = config[key];
        });
    },
    get: function (event) {
        exports.configStore.load();
        event.returnValue = exports.configStore.store;
    },
    set: function (event, config) {
        exports.configStore.store = config;
        exports.configStore.save();
        event.returnValue = null;
    },
    open: function (event) {
        electron_1.shell.openPath(electron_1.app.getPath('userData'));
        event.returnValue = null;
    },
    backup: function (event) {
        var fileName = "config-" + player_1.playerStore.store.version + "-backup.json";
        var result = electron_1.dialog.showSaveDialogSync({
            defaultPath: path.join(electron_1.app.getPath('userData'), fileName),
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        if (result) {
            fs.writeFileSync(result, JSON.stringify(exports.configStore.store, null, 4));
        }
        event.returnValue = null;
    },
    loadBackup: function (event) {
        var result = electron_1.dialog.showOpenDialogSync(null, {
            defaultPath: electron_1.app.getPath('userData'),
            properties: ['openFile'],
            filters: [{ name: 'JSON', extensions: ['json'] }]
        });
        // Do stuff only if something was selected
        if (result === null || result === void 0 ? void 0 : result[0]) {
            var originalPath = exports.configStore.path;
            exports.configStore.path = result[0];
            exports.configStore.load();
            exports.configStore.path = originalPath;
            exports.configStore.save();
            event.returnValue = true;
        }
        else {
            event.returnValue = false;
        }
    }
};
//# sourceMappingURL=config.js.map