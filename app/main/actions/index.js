"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initActions = void 0;
var electron_1 = require("electron");
var fs = require("fs");
var config_1 = require("../store/config");
var player_1 = require("../store/player");
var saveLocation_1 = require("./saveLocation");
function initActions() {
    electron_1.ipcMain.on('get-config', config_1.configStore.get);
    electron_1.ipcMain.on('set-config', config_1.configStore.set);
    electron_1.ipcMain.on('open-config', config_1.configStore.open);
    electron_1.ipcMain.on('backup-config', config_1.configStore.backup);
    electron_1.ipcMain.on('get-save', player_1.playerStore.get);
    electron_1.ipcMain.on('set-save', player_1.playerStore.set);
    electron_1.ipcMain.on('open-save', player_1.playerStore.open);
    electron_1.ipcMain.on('backup-save', player_1.playerStore.backup);
    electron_1.ipcMain.on('new-save', saveLocation_1.newSave);
    electron_1.ipcMain.on('load-save', saveLocation_1.loadSave);
    electron_1.ipcMain.on('load-json', function (event, path) {
        try {
            event.returnValue = JSON.parse(fs.readFileSync(path, 'utf8'));
        }
        catch (e) {
            console.error(e);
            event.returnValue = null;
        }
    });
}
exports.initActions = initActions;
//# sourceMappingURL=index.js.map