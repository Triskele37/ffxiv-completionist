"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initActions = initActions;
const electron_1 = require("electron");
const ConfigStore_1 = require("../store/ConfigStore");
const PlayerStore_1 = require("../store/PlayerStore");
const WindowStore_1 = require("../store/WindowStore");
const getData_1 = require("./getData");
const shareCustom_1 = require("./shareCustom");
function initActions() {
    electron_1.ipcMain.on('app-ready', WindowStore_1.WindowStore.showMainWindow);
    electron_1.ipcMain.handle('app-refresh', async () => { });
    electron_1.ipcMain.on('get-data', getData_1.getData);
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
    electron_1.ipcMain.on('import-custom', shareCustom_1.importCustom);
    electron_1.ipcMain.on('export-custom', shareCustom_1.exportCustom);
}
//# sourceMappingURL=index.js.map