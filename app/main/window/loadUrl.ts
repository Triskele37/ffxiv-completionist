import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';

import { windowStore } from '../store/window';

export function loadWindowUrl(isServe: boolean): void {
    if(isServe) {
        windowStore.window.webContents.openDevTools();
        require('electron-reload')(__dirname, {
            electron: require(path.join(__dirname, '../../../node_modules/electron'))
        });
        windowStore.window.loadURL('http://localhost:4200');
    }
    else {
        // Path when running electron executable
        let pathIndex = './index.html';

        if(fs.existsSync(path.join(__dirname, '../../../dist/index.html'))) {
            // Path when running electron in local folder
            pathIndex = '../../../dist/index.html';
        }

        if(fs.existsSync(path.join(__dirname, '../../../app/index.html'))) {
            // Path when running release
            pathIndex = '../../../app/index.html';
        }

        windowStore.window.loadURL(url.format({
            pathname: path.join(__dirname, pathIndex),
            protocol: 'file:',
            slashes: true
        }));
    }
}
