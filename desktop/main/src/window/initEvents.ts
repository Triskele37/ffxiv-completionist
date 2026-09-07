import { GlobalStore } from '../globalStore';
import { saveWindowState } from './saveWindowState';

export function initEvents(): void {
    if(!GlobalStore.mainWindow) return;

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
