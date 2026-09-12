import { GlobalStore } from '../globalStore';
import { saveWindowState } from './saveWindowState';

export function initEvents(): void {
    if(!GlobalStore.mainWindow) return;

    // SEC: The app does not navigate, prevent any navigation other than self
    GlobalStore.mainWindow.webContents.on('will-navigate', (event) => {
        if(event.frame?.url !== GlobalStore.senderUrl) {
            event.preventDefault();
        }
    });

    // SEC: Prevent webview creation
    GlobalStore.mainWindow.webContents.on('will-attach-webview', (event) => {
        event.preventDefault();
    });

    // SEC: Prevent the app from opening windows
    GlobalStore.mainWindow.webContents.setWindowOpenHandler(() => ({
        action: 'deny'
    }));

    // Capture window state before close
    GlobalStore.mainWindow.on('close', () => {
        saveWindowState();
    });

    // Emitted when the window is closed
    GlobalStore.mainWindow.on('closed', () => {
        // Dereference the window object
        GlobalStore.mainWindow = null;
    });
}
