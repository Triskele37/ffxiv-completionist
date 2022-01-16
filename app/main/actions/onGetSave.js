"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePlayerStore = exports.onGetSave = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var store_1 = require("../store");
function onGetSave() {
    electron_1.ipcMain.on('get-save', function (event) {
        event.returnValue = store_1.store.save;
    });
}
exports.onGetSave = onGetSave;
function initializePlayerStore() {
    var base = store_1.store.config['store-loc'] || electron_1.app.getPath('userData');
    var file = (store_1.store.config['store-name'] || 'completion') + '.json';
    store_1.paths.save = path.join(base, file);
    store_1.store.save = JSON.parse(fs.readFileSync(store_1.paths.save, 'utf8'));
}
exports.initializePlayerStore = initializePlayerStore;
//# sourceMappingURL=onGetSave.js.map