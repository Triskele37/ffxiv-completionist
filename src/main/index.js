import { app, BrowserWindow, ipcMain } from 'electron';

// Set `__static` path to static files in production
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

// Hold reference to the main window
let mainWindow;

// Ensure proper window opens dev vs build
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`;

function createWindow () {
    // Initial Window Options
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        show: false,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Tell the window what to load
    mainWindow.loadURL(winURL);

    // Show the window once initial rendering is complete
    mainWindow.on('ready-to-show', () => mainWindow.show());

    mainWindow.on('close', (event) => {
        event.sender.send('beforeunload');
    });

    // Cleanup
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
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

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
