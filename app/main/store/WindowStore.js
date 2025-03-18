"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowStore = void 0;
var electron_1 = require("electron");
var path = require("path");
var fs = require("fs");
var ConfigStore_1 = require("./ConfigStore");
/**
 * Debug Flag
 * - shows the main window regardless of load state (allows console access)
 */
var DEBUG_MODE = false;
var WindowStore = /** @class */ (function () {
    function WindowStore() {
    }
    WindowStore.create = function (isServe) {
        WindowStore.isServe = isServe;
        WindowStore.loadSplashWindow();
        WindowStore.loadMainWindow(isServe);
        WindowStore.initEvents();
    };
    WindowStore.initEvents = function () {
        // Capture window state before close
        WindowStore.main.on('close', function () {
            WindowStore.saveWindowState();
        });
        // Emitted when the window is closed
        WindowStore.main.on('closed', function () {
            // Dereference the window object, usually you would store window
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            WindowStore.main = null;
        });
    };
    WindowStore.showMainWindow = function (event) {
        WindowStore.splash.destroy();
        WindowStore.main.show();
        if (WindowStore.maxOnShow)
            WindowStore.main.maximize();
        // Fixes redraw issue preventing app interaction
        // Started popping up on release-1-0-0 near commit a70c0ba
        setTimeout(function () {
            WindowStore.main.blur();
            WindowStore.main.focus();
        }, 500);
        event.returnValue = null;
    };
    //#region------------------------------------------------------- Splash Window
    WindowStore.loadSplashWindow = function () {
        WindowStore.splash = new electron_1.BrowserWindow({
            width: 200,
            height: 200,
            transparent: true,
            frame: false,
            // alwaysOnTop: true,
            center: true
        });
        // WindowStore.splash.webContents.openDevTools();
        WindowStore.splash.loadURL("file://".concat(__dirname, "/../../splash.html"));
    };
    //#endregion
    //#region------------------------------------------------------- Main Window
    WindowStore.loadMainWindow = function (isServe) {
        var oldState = WindowStore.loadWindowState();
        WindowStore.main = new electron_1.BrowserWindow(__assign(__assign({}, oldState), { autoHideMenuBar: true, backgroundColor: '#1e1e1e', show: DEBUG_MODE, webPreferences: {
                nodeIntegration: true,
                // Necessary for ElectronService to function
                contextIsolation: false,
            } }));
        WindowStore.maxOnShow = !!oldState.max;
        WindowStore.loadWindowUrl(isServe);
        if (DEBUG_MODE)
            WindowStore.main.webContents.openDevTools();
    };
    WindowStore.loadWindowUrl = function (isServe) {
        if (isServe) {
            var debug = require('electron-debug').default;
            debug();
            require('electron-reload')(__dirname, {
                electron: require(path.join(__dirname, '../../../node_modules/electron'))
            });
            WindowStore.main.loadURL('http://localhost:4200/');
        }
        else {
            // Path when running electron executable
            var indexPath = '../../index.html';
            // Path when running electron in local folder
            var dist = '../../../dist/index.html';
            if (fs.existsSync(path.join(__dirname, dist)))
                indexPath = dist;
            // Path when running release
            var app = '../../../app/index.html';
            if (fs.existsSync(path.join(__dirname, app)))
                indexPath = app;
            var url = new URL(path.join('file:', __dirname, indexPath));
            void WindowStore.main.loadURL(url.href);
        }
    };
    WindowStore.focusMainWindow = function () {
        var _a;
        if ((_a = WindowStore.main) === null || _a === void 0 ? void 0 : _a.isVisible()) {
            if (WindowStore.main.isMinimized())
                WindowStore.main.restore();
            WindowStore.main.focus();
        }
    };
    //#endregion
    //#region------------------------------------------------------- State
    WindowStore.loadWindowState = function () {
        if (!ConfigStore_1.ConfigStore.store)
            ConfigStore_1.ConfigStore.load();
        if (WindowStore.isStoredPositionValid(ConfigStore_1.ConfigStore.store.window)) {
            return ConfigStore_1.ConfigStore.store.window;
        }
        else {
            var primaryDisplay = electron_1.screen.getPrimaryDisplay();
            return {
                x: primaryDisplay.workArea.x,
                y: primaryDisplay.workArea.y,
                height: primaryDisplay.workArea.height,
                width: primaryDisplay.workArea.width
            };
        }
    };
    WindowStore.saveWindowState = function () {
        ConfigStore_1.ConfigStore.store.window = __assign(__assign({}, WindowStore.main.getNormalBounds()), { max: WindowStore.main.isMaximized() });
        ConfigStore_1.ConfigStore.save();
    };
    WindowStore.isStoredPositionValid = function (rect) {
        if (!rect)
            return false;
        // Unreasonably small
        if (rect.height < 100 || rect.width < 100)
            return false;
        // Get the window closest to the stored rect
        var closestWindow = electron_1.screen.getDisplayMatching(rect);
        // Coordinates are not in a window
        if (rect.x < closestWindow.bounds.x)
            return false;
        if (rect.y < closestWindow.bounds.y)
            return false;
        return true;
    };
    return WindowStore;
}());
exports.WindowStore = WindowStore;
//# sourceMappingURL=WindowStore.js.map