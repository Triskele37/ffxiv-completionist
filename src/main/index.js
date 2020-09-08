import { app, nativeImage, BrowserWindow } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { setupMenu } from "./menuBar";

// Set `__static` path to static files in production
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

// Hold reference to the main window
let mainWindow;

// Ensure proper window opens dev vs build
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`;

const initPath = path.join(app.getPath('userData'), 'init.json');

function createWindow () {
    // Initial Window Options
    const { isMaximized, ...windowState } = loadWindowState();

    mainWindow = new BrowserWindow({
        ...windowState,
        show: false,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    if(isMaximized) mainWindow.maximize();

    // Taskbar Icon
    const image = nativeImage.createFromPath(path.join(__dirname, '/icon.png'));
    mainWindow.setIcon(image);

    // Tell the window what to load
    mainWindow.loadURL(winURL);

    // Show the window once initial rendering is complete
    mainWindow.on('ready-to-show', () => mainWindow.show());

    // Capture navigation state before closing
    mainWindow.on('close', (event) => {
        saveWindowState(mainWindow);
        event.sender.send('beforeunload');
    });

    // Cleanup
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    setupMenu(mainWindow);
}

// Initial entry point
app.on('ready', createWindow);

// Cleanup for Windows when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// Re-entry for Mac
app.on('activate', () => {
    if (mainWindow === null) createWindow();
});

//----------------------------------------------------------------------------- Window State
function saveWindowState(mainWindow) {
    const data = {
        bounds: mainWindow.getBounds(),
        isMaximized: mainWindow.isMaximized()
    };

    fs.writeFileSync(initPath, JSON.stringify(data));
}

function loadWindowState() {
    let data;
    try {
        data = JSON.parse(fs.readFileSync(initPath, 'utf8'));
    } catch(e) {}

    return {
        height: data && data.bounds ? data.bounds.height : 600,
        width: data && data.bounds ? data.bounds.width : 800,
        x: data && data.bounds ? data.bounds.x : 100,
        y: data && data.bounds ? data.bounds.y : 100,
        isMaximized: data && data.isMaximized
    };
}
