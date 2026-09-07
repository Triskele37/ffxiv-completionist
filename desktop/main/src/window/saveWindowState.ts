import { GlobalStore } from '../globalStore';
import { saveConfig } from '../config';

export function saveWindowState(): void {
    if(!GlobalStore.config || !GlobalStore.mainWindow) return;

    GlobalStore.config.window = {
        ...GlobalStore.mainWindow.getNormalBounds(),
        max: GlobalStore.mainWindow.isMaximized()
    };

    saveConfig();
}
