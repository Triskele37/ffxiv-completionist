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
var url = require("url");
var ConfigStore_1 = require("./ConfigStore");
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
        if (WindowStore.isServe) {
            WindowStore.main.webContents.openDevTools();
        }
        WindowStore.splash.destroy();
        WindowStore.main.show();
        if (WindowStore.maxOnShow)
            WindowStore.main.maximize();
        event.returnValue = null;
    };
    //#region------------------------------------------------------- Splash Window
    WindowStore.loadSplashWindow = function () {
        WindowStore.splash = new electron_1.BrowserWindow({
            width: 200,
            height: 200,
            transparent: true,
            frame: false,
            alwaysOnTop: true,
            center: true
        });
        // WindowStore.splash.webContents.openDevTools();
        WindowStore.splash.loadURL("file://" + __dirname + "/../../splash.html");
    };
    //#endregion
    //#region------------------------------------------------------- Main Window
    WindowStore.loadMainWindow = function (isServe) {
        var oldState = WindowStore.loadWindowState();
        WindowStore.main = new electron_1.BrowserWindow(__assign(__assign({}, oldState), { autoHideMenuBar: true, backgroundColor: '#1e1e1e', show: false, webPreferences: {
                nodeIntegration: true,
                // true if you want to run e2e test with Spectron or use remote module in renderer context (ie. Angular)
                enableRemoteModule: true,
                // Necessary for ElectronService to function
                contextIsolation: false,
            } }));
        WindowStore.maxOnShow = !!oldState.max;
        WindowStore.loadWindowUrl(isServe);
    };
    WindowStore.loadWindowUrl = function (isServe) {
        if (isServe) {
            require('electron-reload')(__dirname, {
                electron: require(path.join(__dirname, '../../../node_modules/electron'))
            });
            WindowStore.main.loadURL('http://localhost:4200');
        }
        else {
            // Path when running electron executable
            var pathIndex = './index.html';
            if (fs.existsSync(path.join(__dirname, '../../../dist/index.html'))) {
                // Path when running electron in local folder
                pathIndex = '../../../dist/index.html';
            }
            if (fs.existsSync(path.join(__dirname, '../../../app/index.html'))) {
                // Path when running release
                pathIndex = '../../../app/index.html';
            }
            WindowStore.main.loadURL(url.format({
                pathname: path.join(__dirname, pathIndex),
                protocol: 'file:',
                slashes: true
            }));
        }
    };
    //#endregion
    //#region------------------------------------------------------- State
    WindowStore.loadWindowState = function () {
        if (!ConfigStore_1.ConfigStore.store)
            ConfigStore_1.ConfigStore.load();
        if (!ConfigStore_1.ConfigStore.store.window) {
            var primaryDisplay = electron_1.screen.getPrimaryDisplay();
            return {
                x: primaryDisplay.bounds.x,
                y: primaryDisplay.bounds.y,
                height: primaryDisplay.workAreaSize.height,
                width: primaryDisplay.workAreaSize.width
            };
        }
        else {
            return ConfigStore_1.ConfigStore.store.window;
        }
    };
    WindowStore.saveWindowState = function () {
        ConfigStore_1.ConfigStore.store.window = __assign(__assign({}, WindowStore.main.getBounds()), { max: WindowStore.main.isMaximized() });
        ConfigStore_1.ConfigStore.save();
    };
    return WindowStore;
}());
exports.WindowStore = WindowStore;
//# sourceMappingURL=WindowStore.js.map