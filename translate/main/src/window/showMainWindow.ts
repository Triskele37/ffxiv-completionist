import { IpcMainEvent } from 'electron';

import { GlobalStore } from '../GlobalStore';

export function showMainWindow(event: IpcMainEvent): void {
    if(!GlobalStore.mainWindow) return;

    GlobalStore.splashWindow?.destroy();
    GlobalStore.splashWindow = null;

    GlobalStore.mainWindow.show();

    // Fixes redraw issue preventing app interaction
    // Started popping up on release-1-0-0 near commit a70c0ba
    setTimeout(() => {
        GlobalStore.mainWindow?.blur();
        GlobalStore.mainWindow?.focus();
    }, 500);

    event.returnValue = null;
}
