"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowStore = void 0;
const electron_1 = require("electron");
const path = __importStar(require("path"));
const url_1 = require("url");
/**
 * Debug Flag
 * - shows the main window regardless of load state (allows console access)
 */
const DEBUG_MODE = true;
class WindowStore {
    static splash = null;
    static main;
    static create() {
        WindowStore.loadSplashWindow();
        WindowStore.loadMainWindow();
        WindowStore.initEvents();
    }
    static initEvents() {
        if (!WindowStore.main)
            return;
        // Emitted when the window is closed
        WindowStore.main.on('closed', () => {
            // Dereference the window object, usually you would store window
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            WindowStore.main = null;
        });
    }
    static showMainWindow(event) {
        if (!WindowStore.main)
            return;
        WindowStore.splash?.destroy();
        WindowStore.splash = null;
        WindowStore.main.show();
        // Fixes redraw issue preventing app interaction
        // Started popping up on release-1-0-0 near commit a70c0ba
        setTimeout(() => {
            WindowStore.main?.blur();
            WindowStore.main?.focus();
        }, 500);
        event.returnValue = null;
    }
    //#region------------------------------------------------------- Splash Window
    static loadSplashWindow() {
        WindowStore.splash = new electron_1.BrowserWindow({
            width: 200,
            height: 200,
            transparent: true,
            frame: false,
            center: true
        });
        const splashPath = path.join(electron_1.app.getAppPath(), 'main', 'splash.html');
        const splashUrl = (0, url_1.pathToFileURL)(splashPath);
        WindowStore.splash.loadURL(splashUrl.href);
    }
    //#endregion
    //#region------------------------------------------------------- Main Window
    static loadMainWindow() {
        WindowStore.main = new electron_1.BrowserWindow({
            autoHideMenuBar: true,
            backgroundColor: '#1e1e1e',
            show: DEBUG_MODE,
            webPreferences: {
                nodeIntegration: true,
                // Necessary for ElectronService to function
                contextIsolation: false,
            },
        });
        WindowStore.loadWindowUrl();
        if (DEBUG_MODE)
            WindowStore.main.webContents.openDevTools();
    }
    static loadWindowUrl() {
        if (!WindowStore.main)
            return;
        const { default: debug } = require('electron-debug');
        debug();
        const electronModule = path.join(electron_1.app.getAppPath(), '..', 'node_modules', 'electron');
        require('electron-reload')(electron_1.app.getAppPath(), {
            electron: require(electronModule)
        });
        WindowStore.main.loadURL('http://localhost:4200/');
    }
    static focusMainWindow() {
        if (WindowStore.main?.isVisible()) {
            if (WindowStore.main.isMinimized())
                WindowStore.main.restore();
            WindowStore.main.focus();
        }
    }
}
exports.WindowStore = WindowStore;
//# sourceMappingURL=WindowStore.js.map