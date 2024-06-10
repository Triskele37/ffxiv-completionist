"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initActions = void 0;
var electron_1 = require("electron");
var fs = require("fs");
var ConfigStore_1 = require("../store/ConfigStore");
var PlayerStore_1 = require("../store/PlayerStore");
var WindowStore_1 = require("../store/WindowStore");
var Remote = require("../remote");
function initActions() {
    electron_1.ipcMain.on('app-ready', WindowStore_1.WindowStore.showMainWindow);
    electron_1.ipcMain.on('get-config', ConfigStore_1.ConfigStore.get);
    electron_1.ipcMain.on('set-config', ConfigStore_1.ConfigStore.set);
    electron_1.ipcMain.on('new-save', ConfigStore_1.ConfigStore.newSave);
    electron_1.ipcMain.on('load-save', ConfigStore_1.ConfigStore.loadSave);
    electron_1.ipcMain.on('open-config', ConfigStore_1.ConfigStore.open);
    electron_1.ipcMain.on('backup-config', ConfigStore_1.ConfigStore.backup);
    electron_1.ipcMain.on('load-backup-config', ConfigStore_1.ConfigStore.loadBackup);
    electron_1.ipcMain.on('get-save', PlayerStore_1.PlayerStore.get);
    electron_1.ipcMain.on('set-save', PlayerStore_1.PlayerStore.set);
    electron_1.ipcMain.on('open-save', PlayerStore_1.PlayerStore.open);
    electron_1.ipcMain.on('backup-save', PlayerStore_1.PlayerStore.backup);
    electron_1.ipcMain.on('load-backup-save', PlayerStore_1.PlayerStore.loadBackup);
    electron_1.ipcMain.on('load-json', loadJson);
    electron_1.ipcMain.on('search-console-games', Remote.searchConsoleGamer);
    electron_1.ipcMain.on('search-gamer-escape', Remote.searchGamerEscape);
    electron_1.ipcMain.on('search-garland-tools', Remote.searchGarlandTools);
    electron_1.ipcMain.on('open-in-garland-tools', Remote.openInGarlandTools);
    electron_1.ipcMain.on('open-in-teamcraft', Remote.openInTeamcraft);
}
exports.initActions = initActions;
function loadJson(event, groupPath) {
    try {
        if (fs.existsSync(groupPath)) {
            // Directory exists matching 'path', must be _index
            var path = groupPath + '\\_index.json';
            var file = fs.readFileSync(path, 'utf8');
            event.returnValue = JSON.parse(file);
        }
        else {
            // Directory does not exist matching path, group named json
            var path = groupPath + '.json';
            var file = fs.readFileSync(path, 'utf8');
            event.returnValue = JSON.parse(file);
        }
    }
    catch (e) {
        console.error('load-json failed:', e);
        event.returnValue = null;
    }
}
//# sourceMappingURL=index.js.map