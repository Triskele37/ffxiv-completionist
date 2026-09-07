import { app } from 'electron';

import { GlobalStore } from '../globalStore';
import { focusMainWindow, initializeWindows } from '../window';
import { createWindow } from './createWindow';
import { initializeMemoryLogger } from './initializeMemoryLogger';
import { setupCsp } from './setupCsp';

export function initEvents() {
    initializeMemoryLogger();

    // Main ready for full initialization
    app.on('ready', () => {
        setupCsp();

        // Timeout to work around https://github.com/electron/electron/issues/15947
        setTimeout(() => {
            void createWindow().catch(console.error);
        }, 400)
    });

    // Re-focus main window if user attempted to open a 2nd instance of the app
    app.on('second-instance', () => {
        focusMainWindow()
    });

    // Quit when all windows are closed
    app.on('window-all-closed', () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if(process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open
        if(GlobalStore.mainWindow === null) {
            initializeWindows();
        }
    });
}
