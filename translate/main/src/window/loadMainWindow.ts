import { BrowserWindow } from 'electron';

import { GlobalStore } from '../GlobalStore';
import { loadWindowUrl } from './loadWindowUrl';

export function loadMainWindow(): void {
    GlobalStore.mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        backgroundColor: '#1e1e1e',
        show: GlobalStore.DEBUG_MAIN_WINDOW,
        webPreferences: {
            nodeIntegration: true,
            // Necessary for ElectronService to function
            contextIsolation: false,
        },
    });

    loadWindowUrl();

    if(GlobalStore.DEBUG_MAIN_WINDOW) {
        GlobalStore.mainWindow.webContents.openDevTools();
    }
}
