"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSetConfig = void 0;
var electron_1 = require("electron");
var store_1 = require("../store");
function onSetConfig() {
    electron_1.ipcMain.on('set-config', function (event, newConfig) {
        store_1.store.config = newConfig;
        store_1.saveConfig();
        event.returnValue = null;
    });
}
exports.onSetConfig = onSetConfig;
//# sourceMappingURL=onSetConfig.js.map