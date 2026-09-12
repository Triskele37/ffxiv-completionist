import { GlobalStore } from '../GlobalStore';

export function initEvents(): void {
    if(!GlobalStore.mainWindow) return;

    // Emitted when the window is closed
    GlobalStore.mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        GlobalStore.mainWindow = null;
    });
}
