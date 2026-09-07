import { app } from 'electron';
import path from 'path';

import { GlobalStore } from '../GlobalStore';

export function loadWindowUrl(): void {
    if(!GlobalStore.mainWindow) return;

    const { default: debug } = require('electron-debug');
    debug();

    const electronModule = path.join(app.getAppPath(), '..', 'node_modules', 'electron');
    require('electron-reload')(app.getAppPath(), {
        electron: require(electronModule)
    });

    GlobalStore.mainWindow.loadURL('http://localhost:4200/');
}
