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
const fs = __importStar(require("fs"));
const url_1 = require("url");
const ConfigStore_1 = require("./ConfigStore");
/**
 * Debug Flag
 * - shows the main window regardless of load state (allows console access)
 */
const DEBUG_MODE = false;
class WindowStore {
    static isServe;
    static maxOnShow;
    static splash = null;
    static main;
    static create(isServe) {
        WindowStore.isServe = isServe;
        WindowStore.loadSplashWindow();
        WindowStore.loadMainWindow(isServe);
        WindowStore.initEvents();
    }
    static initEvents() {
        if (!WindowStore.main)
            return;
        // Capture window state before close
        WindowStore.main.on('close', () => {
            WindowStore.saveWindowState();
        });
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
        if (WindowStore.maxOnShow)
            WindowStore.main.maximize();
        event.returnValue = null;
    }
    //#region------------------------------------------------------- Splash Window
    static loadSplashWindow() {
        WindowStore.splash = new electron_1.BrowserWindow({
            width: 200,
            height: 200,
            transparent: true,
            frame: false,
            // alwaysOnTop: true,
            center: true
        });
        // WindowStore.splash.webContents.openDevTools();
        const splashPath = path.join(electron_1.app.getAppPath(), 'main', 'splash.html');
        const splashUrl = (0, url_1.pathToFileURL)(splashPath);
        WindowStore.splash.loadURL(splashUrl.href);
    }
    //#endregion
    //#region------------------------------------------------------- Main Window
    static loadMainWindow(isServe) {
        const oldState = WindowStore.loadWindowState();
        WindowStore.main = new electron_1.BrowserWindow({
            ...oldState,
            autoHideMenuBar: true,
            backgroundColor: '#1e1e1e',
            show: DEBUG_MODE,
            webPreferences: {
                nodeIntegration: true,
                // Necessary for ElectronService to function
                contextIsolation: false,
            },
        });
        WindowStore.maxOnShow = !!oldState.max;
        WindowStore.loadWindowUrl(isServe);
        if (DEBUG_MODE)
            WindowStore.main.webContents.openDevTools();
    }
    static loadWindowUrl(isServe) {
        if (!WindowStore.main)
            return;
        if (isServe) {
            const { default: debug } = require('electron-debug');
            debug();
            const electronModule = path.join(electron_1.app.getAppPath(), '..', 'node_modules', 'electron');
            require('electron-reload')(electron_1.app.getAppPath(), {
                electron: require(electronModule)
            });
            WindowStore.main.loadURL('http://localhost:4200/');
        }
        else {
            const locations = [
                // Path when running electron executable
                path.join(__dirname, '../../index.html'),
                // win-unpacked & installed
                path.join(electron_1.app.getAppPath(), 'dist', 'index.html'),
            ];
            for (const location of locations) {
                if (fs.existsSync(location)) {
                    const url = (0, url_1.pathToFileURL)(location);
                    void WindowStore.main.loadURL(url.href);
                    return;
                }
            }
            // Failed to find entry
            electron_1.app.quit();
        }
    }
    static focusMainWindow() {
        if (WindowStore.main?.isVisible()) {
            if (WindowStore.main.isMinimized())
                WindowStore.main.restore();
            WindowStore.main.focus();
        }
    }
    //#endregion
    //#region------------------------------------------------------- State
    static loadWindowState() {
        if (!ConfigStore_1.ConfigStore.store)
            ConfigStore_1.ConfigStore.load();
        if (!ConfigStore_1.ConfigStore.store)
            return {};
        if (WindowStore.isStoredPositionValid(ConfigStore_1.ConfigStore.store.window)) {
            return ConfigStore_1.ConfigStore.store.window;
        }
        else {
            const primaryDisplay = electron_1.screen.getPrimaryDisplay();
            return {
                x: primaryDisplay.workArea.x,
                y: primaryDisplay.workArea.y,
                height: primaryDisplay.workArea.height,
                width: primaryDisplay.workArea.width,
            };
        }
    }
    static saveWindowState() {
        if (!ConfigStore_1.ConfigStore.store || !WindowStore.main)
            return;
        ConfigStore_1.ConfigStore.store.window = {
            ...WindowStore.main.getNormalBounds(),
            max: WindowStore.main.isMaximized()
        };
        ConfigStore_1.ConfigStore.save();
    }
    static isStoredPositionValid(rect) {
        if (!rect)
            return false;
        // Unreasonably small
        if (rect.height < 100 || rect.width < 100)
            return false;
        // Get the window closest to the stored rect
        const closestWindow = electron_1.screen.getDisplayMatching(rect);
        // Coordinates are not in a window
        if (rect.x < closestWindow.bounds.x)
            return false;
        if (rect.y < closestWindow.bounds.y)
            return false;
        return true;
    }
}
exports.WindowStore = WindowStore;
//# sourceMappingURL=WindowStore.js.map