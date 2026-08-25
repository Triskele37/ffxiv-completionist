"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initActions = initActions;
const electron_1 = require("electron");
const WindowStore_1 = require("../WindowStore");
const compare_i18n_1 = require("./compare_i18n");
const compare_data_1 = require("./compare_data");
const getVerified_1 = require("./getVerified");
const saveDataChange_1 = require("./saveDataChange");
const saveVerified_1 = require("./saveVerified");
function initActions() {
    electron_1.ipcMain.on('app-ready', WindowStore_1.WindowStore.showMainWindow);
    electron_1.ipcMain.on('get-verified', getVerified_1.getVerifiedIpc);
    electron_1.ipcMain.on('compare-i18n', compare_i18n_1.compare_i18n);
    electron_1.ipcMain.on('compare-data', compare_data_1.compareResources);
    electron_1.ipcMain.on('save-translation', saveDataChange_1.saveDataChange);
    electron_1.ipcMain.on('save-verified', saveVerified_1.saveVerified);
}
//# sourceMappingURL=index.js.map