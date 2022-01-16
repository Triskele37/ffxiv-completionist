import { ipcMain } from 'electron';
import * as fs from 'fs';

export function onLoadJson() {
    ipcMain.on('load-json', (event, path) => {
        event.returnValue = JSON.parse(fs.readFileSync(path, 'utf8'));
    });
}
