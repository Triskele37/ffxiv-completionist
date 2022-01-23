import { screen } from 'electron';

import { configStore } from '../store/config';
import { windowStore } from '../store/window';

export function saveWindowState() {
    configStore.store.window = {
        ...windowStore.window.getBounds(),
        max: windowStore.window.isMaximized()
    };

    configStore.save();
}

export function loadWindowState() {
    if(!configStore.store) configStore.load();

    if(!configStore.store.window) {
        const primaryDisplay = screen.getPrimaryDisplay();

        return {
            x: primaryDisplay.bounds.x,
            y: primaryDisplay.bounds.y,
            height: primaryDisplay.workAreaSize.height,
            width: primaryDisplay.workAreaSize.width
        };
    }
    else {
        return configStore.store.window;
    }
}
