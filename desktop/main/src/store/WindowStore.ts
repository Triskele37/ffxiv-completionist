import { app, BrowserWindow, IpcMainEvent, Rectangle, screen } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import { pathToFileURL } from 'url';

import { ConfigStore } from './ConfigStore';
import { WindowConfig } from './ConfigObj';

/**
 * Debug Flag
 * - shows the main window regardless of load state (allows console access)
 */
const DEBUG_MODE = false;

export class WindowStore {
    private static isServe: boolean;
    private static maxOnShow: boolean;
    static splash: BrowserWindow | null = null;
    static main: BrowserWindow | null;

    static create(isServe: boolean): void {
        WindowStore.isServe = isServe;

        WindowStore.loadSplashWindow();
        WindowStore.loadMainWindow(isServe);
        WindowStore.initEvents();
    }

    static initEvents(): void {
        if(!WindowStore.main) return;

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

    static showMainWindow(event: IpcMainEvent): void {
        if(!WindowStore.main) return;

        WindowStore.splash?.destroy();
        WindowStore.splash = null;

        WindowStore.main.show();

        if(WindowStore.maxOnShow) WindowStore.main.maximize();

        // Fixes redraw issue preventing app interaction
        // Started popping up on release-1-0-0 near commit a70c0ba
        setTimeout(() => {
            WindowStore.main?.blur();
            WindowStore.main?.focus();
        }, 500);

        event.returnValue = null;
    }

    //#region------------------------------------------------------- Splash Window
    static loadSplashWindow(): void {
        WindowStore.splash = new BrowserWindow({
            width: 200,
            height: 200,
            transparent: true,
            frame: false,
            // alwaysOnTop: true,
            center: true
        });

        // WindowStore.splash.webContents.openDevTools();

        const splashPath = path.join(app.getAppPath(), 'main', 'splash.html');
        const splashUrl = pathToFileURL(splashPath);
        WindowStore.splash.loadURL(splashUrl.href);
    }

    //#endregion

    //#region------------------------------------------------------- Main Window
    static loadMainWindow(isServe: boolean): void {
        const oldState = WindowStore.loadWindowState();

        WindowStore.main = new BrowserWindow({
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

        if(DEBUG_MODE) WindowStore.main.webContents.openDevTools();
    }

    static loadWindowUrl(isServe: boolean): void {
        if(!WindowStore.main) return;

        if(isServe) {
            const { default: debug } = require('electron-debug');
            debug();

            const electronModule = path.join(app.getAppPath(), '..', 'node_modules', 'electron');
            require('electron-reload')(app.getAppPath(), {
                electron: require(electronModule)
            });
            WindowStore.main.loadURL('http://localhost:4200/');
        }
        else {
            const locations = [
                // Path when running electron executable
                path.join(__dirname, '../../index.html'),
                // win-unpacked & installed
                path.join(app.getAppPath(), 'dist', 'index.html'),
            ];

            for(const location of locations) {
                if(fs.existsSync(location)) {
                    const url = pathToFileURL(location);
                    void WindowStore.main.loadURL(url.href);
                    return;
                }
            }

            // Failed to find entry
            app.quit();
        }
    }

    static focusMainWindow(): void {
        if(WindowStore.main?.isVisible()) {
            if(WindowStore.main.isMinimized()) WindowStore.main.restore();
            WindowStore.main.focus();
        }
    }

    //#endregion

    //#region------------------------------------------------------- State
    static loadWindowState() {
        if(!ConfigStore.store) ConfigStore.load();
        if(!ConfigStore.store) return {} as WindowConfig;

        if(WindowStore.isStoredPositionValid(ConfigStore.store.window)) {
            return ConfigStore.store.window;
        }
        else {
            const primaryDisplay = screen.getPrimaryDisplay();

            return {
                x: primaryDisplay.workArea.x,
                y: primaryDisplay.workArea.y,
                height: primaryDisplay.workArea.height,
                width: primaryDisplay.workArea.width,
            };
        }
    }

    static saveWindowState(): void {
        if(!ConfigStore.store || !WindowStore.main) return;

        ConfigStore.store.window = {
            ...WindowStore.main.getNormalBounds(),
            max: WindowStore.main.isMaximized()
        };

        ConfigStore.save();
    }

    static isStoredPositionValid(rect?: Rectangle): boolean {
        if(!rect) return false;

        // Unreasonably small
        if(rect.height < 100 || rect.width < 100) return false;

        // Get the window closest to the stored rect
        const closestWindow = screen.getDisplayMatching(rect);

        // Coordinates are not in a window
        if(rect.x < closestWindow.bounds.x) return false;
        if(rect.y < closestWindow.bounds.y) return false;

        return true;
    }

    //#endregion

}
