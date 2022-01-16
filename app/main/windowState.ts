import { app, screen } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

const initPath = path.join(app.getPath('userData'), 'init.json');

export function saveWindowState(mainWindow) {
    const data = {
        bounds: mainWindow.getBounds(),
        isMaximized: mainWindow.isMaximized()
    };

    fs.writeFileSync(initPath, JSON.stringify(data));
}

export function loadWindowState() {
    let data;
    try {
        data = JSON.parse(fs.readFileSync(initPath, 'utf8'));
    } catch(e) {}

    const size = screen.getPrimaryDisplay().workAreaSize;

    let isMaximized: boolean;
    let height: number;
    let width: number;
    let x: number;
    let y: number;

    isMaximized = data?.isMaximized ?? false;
    height = data?.bounds.height || size.height || 600;
    width = data?.bounds.width || size.width || 800;
    x = data?.bounds.x || 100;
    y = data?.bounds.y || 100;

    return { height, width, x, y, isMaximized };
}
