"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMenuItems = void 0;
var electron_1 = require("electron");
var modifyStore_1 = require("./modifyStore");
var changeLanguage_1 = require("./changeLanguage");
// Determine environment
var isMac = process.platform === 'darwin';
var addMenuItems = function (window) {
    var menuTemplate = __spreadArray(__spreadArray([], (isMac ? [APP_MENU] : [])), [
        FILE_MENU,
        PROGRESS_MENU(window),
        VIEW_MENU,
        SETTINGS_MENU(window),
        DEVELOPER_MENU,
    ]);
    var menu = electron_1.Menu.buildFromTemplate(menuTemplate);
    electron_1.Menu.setApplicationMenu(menu);
};
exports.addMenuItems = addMenuItems;
//------------------------------------------------------------------
// Mac App Menu
//------------------------------------------------------------------
var APP_MENU = {
    label: electron_1.app.name,
    submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
    ]
};
//------------------------------------------------------------------
// File Menu
//------------------------------------------------------------------
var FILE_MENU = {
    label: 'File',
    submenu: [
        isMac ? { role: 'close' } : { role: 'quit' }
    ]
};
//------------------------------------------------------------------
// Progress Menu
//------------------------------------------------------------------
var PROGRESS_MENU = function (mainWindow) { return ({
    label: 'Progress',
    submenu: [
        { label: 'New Character', click: modifyStore_1.createNewStore(mainWindow) },
        { label: 'Load Character', click: modifyStore_1.moveStoreLocation(mainWindow) },
    ]
}); };
//------------------------------------------------------------------
// View Menu
//------------------------------------------------------------------
var VIEW_MENU = {
    label: 'View',
    submenu: [
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
    ]
};
//------------------------------------------------------------------
// Settings Menu
//------------------------------------------------------------------
var SETTINGS_MENU = function (mainWindow) { return ({
    label: 'Settings',
    submenu: [
        { label: 'Change Language', click: changeLanguage_1.changeLanguage(mainWindow) }
    ]
}); };
//------------------------------------------------------------------
// Developer Menu
//------------------------------------------------------------------
var DEVELOPER_MENU = {
    label: 'Developer',
    submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
    ]
};
//# sourceMappingURL=menuBar.js.map