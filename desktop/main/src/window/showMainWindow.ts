import { GlobalStore } from '../globalStore';

export function showMainWindow(): void {
    if(!GlobalStore.mainWindow) return;

    if(!GlobalStore.DEBUG_SPLASH_WINDOW) {
        GlobalStore.splashWindow?.destroy();
        GlobalStore.splashWindow = null;
    }

    GlobalStore.mainWindow.show();

    if(GlobalStore.maximizeWindowOnShow) {
        GlobalStore.mainWindow.maximize();
    }
}
