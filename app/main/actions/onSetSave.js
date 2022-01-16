"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSetSave = void 0;
var electron_1 = require("electron");
var fs = require("fs");
var store_1 = require("../store");
function onSetSave() {
    electron_1.ipcMain.on('set-save', function (event, newSave) {
        store_1.store.save = newSave;
        saveSave();
        event.returnValue = null;
    });
}
exports.onSetSave = onSetSave;
function saveSave() {
    fs.writeFileSync(store_1.paths.save, JSON.stringify(store_1.store.save, null, 4));
}
//# sourceMappingURL=onSetSave.js.map