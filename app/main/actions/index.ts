import { ipcMain } from 'electron';
import * as fs from 'fs';

import { configStore } from '../store/config';
import { playerStore } from '../store/player';
import { loadSave, newSave } from './saveLocation';

export function initActions() {
    ipcMain.on('get-config', configStore.get);
    ipcMain.on('set-config', configStore.set);

    ipcMain.on('get-save', playerStore.get);
    ipcMain.on('set-save', playerStore.set);

    ipcMain.on('new-save', newSave);
    ipcMain.on('load-save', loadSave);

    ipcMain.on('load-json', (event, path) => {
        event.returnValue = JSON.parse(fs.readFileSync(path, 'utf8'));
    });
}
