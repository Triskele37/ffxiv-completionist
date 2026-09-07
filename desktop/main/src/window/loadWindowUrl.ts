import { app } from 'electron';
import path from 'path';
import fs from 'fs';
import { pathToFileURL } from 'url';

import { GlobalStore } from '../globalStore';

export function loadWindowUrl(): void {
    if(GlobalStore.isServe) loadForServe();
    else loadForProd();
}

function loadForServe(): void {
    if(!GlobalStore.mainWindow) return;

    const { default: debug } = require('electron-debug');
    debug();

    const electronModule = path.join(app.getAppPath(), '..', 'node_modules', 'electron');
    require('electron-reload')(app.getAppPath(), {
        electron: require(electronModule)
    });

    GlobalStore.mainWindow.loadURL('http://localhost:4200/');
}

function loadForProd(): void {
    if(!GlobalStore.mainWindow) return;

    const locations = [
        // Path when running electron executable
        path.join(__dirname, '../../index.html'),
        // win-unpacked & installed
        path.join(app.getAppPath(), 'dist', 'index.html'),
    ];

    for(const location of locations) {
        if(fs.existsSync(location)) {
            const url = pathToFileURL(location);
            void GlobalStore.mainWindow.loadURL(url.href);
            return;
        }
    }

    // Failed to find entry
    app.quit();
}
