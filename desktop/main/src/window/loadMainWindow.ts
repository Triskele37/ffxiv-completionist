import { app, BrowserWindow } from 'electron';
import path from 'path';

import { GlobalStore } from '../globalStore';
import { loadWindowUrl } from './loadWindowUrl';
import { loadWindowState } from './loadWindowState';

export function loadMainWindow(): void {
    const oldState = loadWindowState();

    GlobalStore.mainWindow = new BrowserWindow({
        ...oldState,
        autoHideMenuBar: true,
        backgroundColor: '#1e1e1e',
        show: GlobalStore.DEBUG_MAIN_WINDOW,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'main', 'preload.js'),
            // explicitly set these to the secure values
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
        },
    });

    GlobalStore.maximizeWindowOnShow = !!oldState.max;
    loadWindowUrl();

    if(GlobalStore.DEBUG_MAIN_WINDOW) {
        GlobalStore.mainWindow.webContents.openDevTools();
    }
}
