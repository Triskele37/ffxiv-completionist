import { app, ipcMain } from 'electron';
import * as fs from 'fs';

import { paths, store } from '../store';

export function onGetConfig() {
    ipcMain.on('get-config', (event) => {
        event.returnValue = store.config;
    });
}

export function initializeConfigStore() {
    store.config = JSON.parse(fs.readFileSync(paths.config, 'utf8'));

    setDefaultConfig('store-name', 'completion');
    setDefaultConfig('store-loc', app.getPath('userData'));
    setDefaultConfig('starting-class', '');
    setDefaultConfig('chaining-enabled', false);
    setDefaultConfig('chain-min-threshold', 10);
    setDefaultConfig('table-filters', {
        completed: true,
        incomplete: true,
        excluded: true
    });
}

function setDefaultConfig(key: string, defaultValue: any): void {
    if(store.config[key] === undefined) store.config[key] = defaultValue;
}
