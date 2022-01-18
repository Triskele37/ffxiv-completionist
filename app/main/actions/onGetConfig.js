"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeConfigStore = exports.onGetConfig = void 0;
var electron_1 = require("electron");
var fs = require("fs");
var store_1 = require("../store");
function onGetConfig() {
    electron_1.ipcMain.on('get-config', function (event) {
        event.returnValue = store_1.store.config;
    });
}
exports.onGetConfig = onGetConfig;
function initializeConfigStore() {
    if (fs.existsSync(store_1.paths.config)) {
        store_1.store.config = JSON.parse(fs.readFileSync(store_1.paths.config, 'utf8'));
    }
    else {
        store_1.store.config = {};
    }
    setDefaultConfig('store-name', 'completion');
    setDefaultConfig('store-loc', electron_1.app.getPath('userData'));
    setDefaultConfig('lang', 'en');
    setDefaultConfig('starting-class', '');
    setDefaultConfig('chaining-enabled', false);
    setDefaultConfig('chain-history-limit', 10);
    setDefaultConfig('chain-min-threshold', 10);
    setDefaultConfig('table-filters', {
        completed: true,
        incomplete: true,
        excluded: true
    });
    setDefaultConfig('bookmarked-groups', []);
    setDefaultConfig('bookmarked-tasks', []);
    setDefaultConfig('last-breadcrumbs', ['Overall', 'FFXIV Completionist']);
}
exports.initializeConfigStore = initializeConfigStore;
function setDefaultConfig(key, defaultValue) {
    if (store_1.store.config[key] === undefined)
        store_1.store.config[key] = defaultValue;
}
//# sourceMappingURL=onGetConfig.js.map