import { GlobalStore } from '../globalStore';

export function focusMainWindow(): void {
    if(GlobalStore.mainWindow?.isVisible()) {
        if(GlobalStore.mainWindow.isMinimized()) {
            GlobalStore.mainWindow.restore();
        }

        GlobalStore.mainWindow.focus();
    }
}
