import { BrowserWindow } from 'electron';

import { loadWindowState, saveWindowState } from '../window/state';
import { loadWindowUrl } from '../window/loadUrl';

export const windowStore = {
    splash: null,
    window: null,
    create: (isServe: boolean) => {
        loadSplashWindow();
        loadMainWindow(isServe);
        windowStore.initEvents();
    },
    initEvents: () => {
        windowStore.window.once('ready-to-show', () => {
            windowStore.splash.destroy();
            windowStore.window.show();
        });

        // Capture window state before close
        windowStore.window.on('close', () => {
            saveWindowState();
        });

        // Emitted when the window is closed
        windowStore.window.on('closed', () => {
            // Dereference the window object, usually you would store window
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            windowStore.window = null;
        });
    }
};

function loadSplashWindow(): void {
    windowStore.splash = new BrowserWindow({
        width: 200,
        height: 200,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        center: true
    });

    // windowStore.splash.webContents.openDevTools();
    windowStore.splash.loadURL(`file://${__dirname}/../../splash.html`);
}

function loadMainWindow(isServe: boolean): void {
    const oldState = loadWindowState();

    windowStore.window = new BrowserWindow({
        ...oldState,
        autoHideMenuBar: true,
        backgroundColor: '#1e1e1e',
        show: false,
        webPreferences: {
            nodeIntegration: true,
            // true if you want to run e2e test with Spectron or use remote module in renderer context (ie. Angular)
            enableRemoteModule: true,
            // Necessary for ElectronService to function
            contextIsolation: false,
        },
    })

    if(oldState.max) windowStore.window.maximize();

    loadWindowUrl(isServe);
}
