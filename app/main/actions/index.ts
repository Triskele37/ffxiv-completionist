import { ipcMain, IpcMainEvent } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

import { ConfigStore } from '../store/ConfigStore';
import { PlayerStore } from '../store/PlayerStore';
import { WindowStore } from '../store/WindowStore';
import * as Remote from '../remote';

export function initActions() {
    ipcMain.on('app-ready', WindowStore.showMainWindow);

    ipcMain.on('get-config', ConfigStore.get);
    ipcMain.on('set-config', ConfigStore.set);
    ipcMain.on('new-save', ConfigStore.newSave);
    ipcMain.on('load-save', ConfigStore.loadSave);
    ipcMain.on('open-config', ConfigStore.open);
    ipcMain.on('backup-config', ConfigStore.backup);
    ipcMain.on('load-backup-config', ConfigStore.loadBackup);

    ipcMain.on('get-save', PlayerStore.get);
    ipcMain.on('set-save', PlayerStore.set);
    ipcMain.on('open-save', PlayerStore.open);
    ipcMain.on('backup-save', PlayerStore.backup);
    ipcMain.on('load-backup-save', PlayerStore.loadBackup);

    ipcMain.on('load-json', loadJson);

    ipcMain.on('search-console-games', Remote.searchConsoleGamer);
    ipcMain.on('search-gamer-escape', Remote.searchGamerEscape);
    ipcMain.on('search-garland-tools', Remote.searchGarlandTools);
    ipcMain.on('open-in-garland-tools', Remote.openInGarlandTools);
    ipcMain.on('open-in-teamcraft', Remote.openInTeamcraft);
}

/**
 * NOTE - remember to keep this OS agnostic
 */
function loadJson(event: IpcMainEvent, groupPath: string): void {
    try {
        if(fs.existsSync(groupPath)) {
            // Directory exists matching 'path', must be _index
            const filePath = path.join(groupPath, '_index.json');
            const file = fs.readFileSync(filePath, 'utf8');
            event.returnValue = JSON.parse(file);
        }
        else {
            // Directory does not exist matching path, group named json
            const filePath = groupPath + '.json';
            const file = fs.readFileSync(filePath, 'utf8');
            event.returnValue = JSON.parse(file);
        }
    }
    catch(e) {
        console.error('load-json failed:', e);
        event.returnValue = null;
    }
}
