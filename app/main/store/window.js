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
exports.windowStore = void 0;
var electron_1 = require("electron");
var state_1 = require("../window/state");
var loadUrl_1 = require("../window/loadUrl");
exports.windowStore = {
    splash: null,
    window: null,
    create: function (isServe) {
        loadSplashWindow();
        loadMainWindow(isServe);
        exports.windowStore.initEvents();
    },
    initEvents: function () {
        exports.windowStore.window.once('ready-to-show', function () {
            exports.windowStore.splash.destroy();
            exports.windowStore.window.show();
        });
        // Capture window state before close
        exports.windowStore.window.on('close', function () {
            state_1.saveWindowState();
        });
        // Emitted when the window is closed
        exports.windowStore.window.on('closed', function () {
            // Dereference the window object, usually you would store window
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            exports.windowStore.window = null;
        });
    }
};
function loadSplashWindow() {
    exports.windowStore.splash = new electron_1.BrowserWindow({
        width: 200,
        height: 200,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        center: true
    });
    loadUrl_1.loadSplashUrl();
}
function loadMainWindow(isServe) {
    var oldState = state_1.loadWindowState();
    exports.windowStore.window = new electron_1.BrowserWindow(__assign(__assign({}, oldState), { autoHideMenuBar: true, backgroundColor: '#1e1e1e', show: false, webPreferences: {
            nodeIntegration: true,
            // true if you want to run e2e test with Spectron or use remote module in renderer context (ie. Angular)
            enableRemoteModule: true,
            // Necessary for ElectronService to function
            contextIsolation: false,
        } }));
    if (oldState.max)
        exports.windowStore.window.maximize();
    loadUrl_1.loadWindowUrl(isServe);
}
//# sourceMappingURL=window.js.map