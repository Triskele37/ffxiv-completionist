import { app, BrowserWindow } from 'electron';
import path from 'path';
import { pathToFileURL } from 'url';

import { GlobalStore } from '../globalStore';

export function loadSplashWindow(): void {
    GlobalStore.splashWindow = new BrowserWindow({
        width: 200,
        height: 200,
        transparent: true,
        frame: false,
        // alwaysOnTop: true,
        center: true
    });

    if(GlobalStore.DEBUG_SPLASH_WINDOW) {
        GlobalStore.splashWindow.webContents.openDevTools();
    }

    const splashPath = path.join(app.getAppPath(), 'main', 'splash.html');
    const splashUrl = pathToFileURL(splashPath);

    GlobalStore.splashWindow.loadURL(splashUrl.href);
}
