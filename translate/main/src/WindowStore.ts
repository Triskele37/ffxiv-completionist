import { app, BrowserWindow, IpcMainEvent } from 'electron';
import * as path from 'path';
import { pathToFileURL } from 'url';

/**
 * Debug Flag
 * - shows the main window regardless of load state (allows console access)
 */
const DEBUG_MODE = true;

export class WindowStore {
    static splash: BrowserWindow | null = null;
    static main: BrowserWindow | null;

    static create(): void {
        WindowStore.loadSplashWindow();
        WindowStore.loadMainWindow();
        WindowStore.initEvents();
    }

    static initEvents(): void {
        if(!WindowStore.main) return;

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
            center: true
        });

        const splashPath = path.join(app.getAppPath(), 'main', 'splash.html');
        const splashUrl = pathToFileURL(splashPath);
        WindowStore.splash.loadURL(splashUrl.href);
    }

    //#endregion

    //#region------------------------------------------------------- Main Window
    static loadMainWindow(): void {
        WindowStore.main = new BrowserWindow({
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

        if(DEBUG_MODE) WindowStore.main.webContents.openDevTools();
    }

    static loadWindowUrl(): void {
        if(!WindowStore.main) return;

        const { default: debug } = require('electron-debug');
        debug();

        const electronModule = path.join(app.getAppPath(), '..', 'node_modules', 'electron');
        require('electron-reload')(app.getAppPath(), {
            electron: require(electronModule)
        });
        WindowStore.main.loadURL('http://localhost:4200/');
    }

    static focusMainWindow(): void {
        if(WindowStore.main?.isVisible()) {
            if(WindowStore.main.isMinimized()) WindowStore.main.restore();
            WindowStore.main.focus();
        }
    }

    //#endregion

}
