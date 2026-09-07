import { app } from 'electron';

import { initActions } from './src/actions';
import { preloadJson } from './src/actions/preloadJson';
// import { logMemoryToConsole } from './main/util/logMemoryToConsole';

import { GlobalStore } from './src/globalStore';
import { focusMainWindow, initializeWindows } from './src/window';

const args = process.argv.slice(1);
const isServe = args.some((val) => val === '--serve');

// Keep here and just comment out when not in use
// logMemoryToConsole();

async function createWindow() {
    await preloadJson();

    GlobalStore.isServe = isServe;
    initializeWindows();
    initActions();
}

const singleLock = app.requestSingleInstanceLock();
if(!singleLock) app.quit();
else {
    try {
        // Re-focus main window if user attempted to open a 2nd instance of the app
        app.on('second-instance', () => {
            focusMainWindow()
        });

        // This method will be called when Electron has finished initialization and is ready to create browser windows.
        // Some APIs can only be used after this event occurs.
        // Added 400 ms to fix the black background issue while using transparent window.
        // More detais at https://github.com/electron/electron/issues/15947
        app.on('ready', () => {
            setTimeout(createWindow, 400)
        });

        // Quit when all windows are closed.
        app.on('window-all-closed', () => {
            // On OS X it is common for applications and their menu bar
            // to stay active until the user quits explicitly with Cmd + Q
            if(process.platform !== 'darwin') {
                app.quit();
            }
        });

        app.on('activate', () => {
            // On OS X it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if(GlobalStore.mainWindow === null) {
                createWindow();
            }
        });

    } catch(e) {
        console.error(e);
        // Catch Error
        // throw e;
    }
}
